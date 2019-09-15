import React, { Component } from 'react';
import CustomInput          from './../comps/CustomInput';
import CustomButton         from './../comps/CustomButton';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';
import ErrorHandler         from './../config/validation/ErrorHandler';

export default class StudentForm extends Component {

    constructor() {
        super();
        this.state = {cdStudent:'', idStudent:'', nmStudent:''};
        this.submitForm = this.submitForm.bind(this);
        this.setIdStudent = this.setIdStudent.bind(this);
        this.setNmStudent = this.setNmStudent.bind(this);
    }

    submitForm( event ) {
        event.preventDefault(); /* Evita o recarregamento da tela (comportamento padrão do dom) */
        $.ajax({
            url: "https://localhost:8443/students",
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({idStudent:this.state.idStudent, nmStudent:this.state.nmStudent}),
            success: function(newList) {
                PubSub.publish('refresh-list-students', newList);
                this.setState({cdStudent:'', idStudent:'', nmStudent:''});
            }.bind(this),
            error: function(response) {
                if(response.status === 400) { //bad request
                    new ErrorHandler().publishError(response.responseJSON);
                }
            },
            beforeSend: function() {
                PubSub.publish('form-error-clean');
            }
        })
    }
    
    setIdStudent(event) {
        this.setState({idStudent:event.target.value});
    }

    setNmStudent(event) {
        this.setState({nmStudent:event.target.value});
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.submitForm}>
                    <CustomInput id="idStudent" type="text" value={this.state.idStudent} onChange={this.setIdStudent} label="Matrícula" />
                    <CustomInput id="nmStudent" type="text" value={this.state.nmStudent} onChange={this.setNmStudent} label="Nome" />
                    <CustomButton id="submitButton" type="submit" className="pure-button pure-button-primary" title="Gravar" label="" />
                </form>
            </div>
        );
    }
}