import React, { Component } from 'react';
import BasicButton          from './../comps/BasicButton';
import PubSub               from 'pubsub-js';


export default class StudentHeader extends Component {

    updateFieldValue(fieldName, event) {
        this.setState({[fieldName]:event.EventTarget.value});
    }

    

    render() {
        return (
            <div className="content-header-buttons">
                <BasicButton id="btnnew" label="Novo" onClick={this.newStudent}/>
                <BasicButton id="btnedit" label="Editar" onClick={this.editStudent}/>
                <BasicButton id="btndelete" label="Excluir" onClick={this.deleteStudent}/>
            </div>
        );
    }
}