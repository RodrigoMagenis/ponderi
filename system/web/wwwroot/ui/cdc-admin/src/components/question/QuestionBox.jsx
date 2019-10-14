import React, { Component } from 'react';
import QuestionForm          from './QuestionForm';
import QuestionTable         from './QuestionTable';
import QuestionHeader        from './QuestionHeader';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';

export default class QuestionBox extends Component {

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
            url: "https://localhost:8443/questions",
            dataType: 'json',
            type: 'get',
            success:function(response) {
                this.setState({list:response});
            }.bind(this)
        });
        
        PubSub.subscribe('refresh-list-questions', function(topic, newList) {
            this.setState({list:newList});
        }.bind(this));

        PubSub.subscribe('refresh-selected-question', function(topic, question) {
            this.setState({selectedElm:question});
        }.bind(this));

        PubSub.subscribe('refresh-action-questions', function(topic, action) {
            this.setState({action:action});
        }.bind(this));
    }

    async callbackSelection(value){
        await this.setState({selectedElm: value});
    }

    render() {
        return (
            <div className="content" id="content">
                <QuestionHeader selectedElm={this.state.selectedElm} />
                <QuestionTable list={this.state.list} callbackSelection={this.callbackSelection} selectedElm={this.state.selectedElm} />
                <QuestionForm action={this.state.action} selectedElm={this.state.selectedElm}/>
            </div>
        );
    }
}

