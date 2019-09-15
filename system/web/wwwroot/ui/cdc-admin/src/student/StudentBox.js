import React, { Component } from 'react';
import StudentForm          from './StudentForm';
import StudentTable         from './StudentTable';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';

export default class StudentBox extends Component {

    constructor() {
        super();
        this.state = {list: []};
    }

    componentDidMount() {
        $.ajax({
            url: "https://localhost:8443/students",
            dataType: 'json',
            type: 'get',
            success:function(response) {
                this.setState({list:response});
            }.bind(this)aaa
        });
        
        PubSub.subscribe('refresh-list-students', function(topic, newList) {
            this.setState({list:newList});
        }.bind(this));
    }

    render() {
        return (
            <div className="content" id="content">
                <StudentForm setList={this.setList}/>
                <StudentTable list={this.state.list}/>
            </div>
        );
    }
}