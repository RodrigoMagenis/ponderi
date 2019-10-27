import React, { Component } from 'react';
import TestForm          from './TestForm';
import TestTable         from './TestTable';
import TestHeader        from './TestHeader';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';

export default class TestBox extends Component {

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
            url: "https://localhost:8443/tests",
            dataType: 'json',
            type: 'get',
            success:function(response) {
                this.setState({list:response});
            }.bind(this)
        });
        
        PubSub.subscribe('refresh-list-tests', function(topic, newList) {
            this.setState({list:newList});
        }.bind(this));

        PubSub.subscribe('refresh-selected-test', function(topic, test) {
            this.setState({selectedElm:test});
        }.bind(this));

        PubSub.subscribe('refresh-action-tests', function(topic, action) {
            this.setState({action:action});
        }.bind(this));
    }

    async callbackSelection(value){
        await this.setState({selectedElm: value});
    }

    render() {
        return (
            <div className="content" id="content">
                <TestHeader selectedElm={this.state.selectedElm} />
                <TestTable list={this.state.list} callbackSelection={this.callbackSelection} selectedElm={this.state.selectedElm} />
                <TestForm action={this.state.action} selectedElm={this.state.selectedElm}/>
            </div>
        );
    }
}

