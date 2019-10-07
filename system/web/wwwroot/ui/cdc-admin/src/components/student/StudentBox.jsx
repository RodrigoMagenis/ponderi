import React, { Component } from 'react';
import StudentForm          from './StudentForm';
import StudentTable         from './StudentTable';
import StudentHeader        from './StudentHeader';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';

export default class StudentBox extends Component {

    constructor() {
        super();
        this.state = {
            list: [],
            action: -1,
            selectedElm: []
        };

        this.callbackSelection = this.callbackSelection.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: "https://localhost:8443/students",
            dataType: 'json',
            type: 'get',
            success:function(response) {
                this.setState({list:response});
            }.bind(this)
        });
        
        PubSub.subscribe('refresh-list-students', function(topic, newList) {
            this.setState({list:newList});
        }.bind(this));

        PubSub.subscribe('refresh-action-students', function(topic, action) {
            this.setState({action:action});
        }.bind(this));
    }

/*     callbackSelection(value) {
        this.setState({selectedElm: value});
    } */

    async callbackSelection(value){
        await this.setState({selectedElm: value});
    }

    render() {
        return (
            <div className="content" id="content">
                <StudentHeader selectedElm={this.state.selectedElm} />
                <StudentTable list={this.state.list} callbackSelection={this.callbackSelection} selectedElm={this.state.selectedElm} />
                <StudentForm action={this.state.action} selectedElm={this.state.selectedElm}/>
            </div>
        );
    }
}
