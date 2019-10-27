import React, { Component } from 'react';
import TestExecutionForm          from './TestExecutionForm';
import TestExecutionTable         from './TestExecutionTable';
import TestExecutionHeader        from './TestExecutionHeader';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';

export default class TestExecutionBox extends Component {

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
            url: "https://localhost:8443/testsexecution",
            dataType: 'json',
            type: 'get',
            success:function(response) {
                this.setState({list:response});
            }.bind(this)
        });
        
        PubSub.subscribe('refresh-list-testsexecution', function(topic, newList) {
            this.setState({list:newList});
        }.bind(this));

        PubSub.subscribe('refresh-selected-testexecution', function(topic, test) {
            this.setState({selectedElm:test});
        }.bind(this));

        PubSub.subscribe('refresh-action-testsexecution', function(topic, action) {
            this.setState({action:action});
        }.bind(this));
    }

    async callbackSelection(value){
        await this.setState({selectedElm: value});
    }

    render() {
        return (
            <div className="content" id="content">
                <TestExecutionHeader selectedElm={this.state.selectedElm} />
                <TestExecutionTable list={this.state.list} callbackSelection={this.callbackSelection} selectedElm={this.state.selectedElm} />
                <TestExecutionForm action={this.state.action} selectedElm={this.state.selectedElm}/>
            </div>
        );
    }
}

