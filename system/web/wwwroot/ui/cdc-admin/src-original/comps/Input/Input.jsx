import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import PubSub             from 'pubsub-js';
export default class CustomInput extends Component {

    constructor() {
        super();
        this.state = {errorMessage:''};
    }

    componentDidMount() {
        PubSub.subscribe('form-error-validation', function( topic, error ) {
            if (error.element === this.props.id) {
                this.setState({errorMessage:error.errorMessage});
            }
        }.bind(this));

        PubSub.subscribe('form-error-clean', function(topic) {
            this.setState({errorMessage:''});
        }.bind(this));
    }

    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} name={this.props.id} value={this.props.value} onChange={this.props.onChange} />
                <span className="error">{this.state.errorMessage}</span>
            </div>
        );


    }
}