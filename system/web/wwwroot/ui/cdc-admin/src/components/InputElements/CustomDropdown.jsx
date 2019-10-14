import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';
import {Message} from 'primereact/message';
import PubSub             from 'pubsub-js';

export default class CustomInput extends Component {

    constructor() {
        super();
        this.state = {haserror:false, errorMessage:'', className:'p-inputtext p-component'};
    }

    componentDidMount() {
        PubSub.subscribe('form-error-validation', function( topic, error ) {
            if (error.element === this.props.id) {
                this.setState({haserror:true, errorMessage:error.errorMessage, className:'p-inputtext p-component p-error'});
            }
        }.bind(this));

        PubSub.subscribe('form-error-clean', function(topic) {
            this.setState({haserror:false, errorMessage:'', className:'p-inputtext p-component'});
        }.bind(this));
    }


    render() {
        return (
            <div className="p-col-12 p-md-4">
                <Dropdown {...this.props}
                    //id={this.props.id}
                    //options={this.props.options}
                    //value={this.props.value}
                    autoWidth={false}
                />
                {this.state.haserror && <Message severity="error" text={this.state.errorMessage} />}
            </div>
        );
    }
}