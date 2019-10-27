import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Message} from 'primereact/message';
//import {Growl} from 'primereact/growl';
import PubSub             from 'pubsub-js';

export default class CustomInput extends Component {

    constructor() {
        super();
        this.state = {haserror:false, errorMessage:'', className:'p-inputtext p-component'};
//        this.showError = this.showError.bind(this);
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

    // showError() {
    //     this.growl.show({severity: 'error', summary: 'Error Message', detail: this.state.errorMessage});
    //     this.setState({haserror: false});
    // }


    render() {
        return (
            <div className="p-col-12 p-md-4">
                <InputText
                    id={this.props.id}
                    type={this.props.type}
                    className={this.state.haserror ? 'p-inputtext p-component p-error' : 'p-inputtext p-component'}
                    placeholder={this.props.label}
                    name={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                {this.state.haserror && <Message severity="error" text={this.state.errorMessage} />}
                {/* <Growl ref={(el) => this.growl = el} style={{marginTop: '75px'}} />
                {this.state.haserror && this.showError()} */}
            </div>
        );
    }
}