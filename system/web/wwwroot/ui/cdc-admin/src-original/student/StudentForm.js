import React, { Component } from 'react';
import Input                from '../comps/Input/Input.jsx';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';
import ErrorHandler         from '../config/validation/ErrorHandler';
import Modal                from '../comps/Modal/Modal.jsx';

export default class StudentForm extends Component {


    //const [modalShow, setModalShow] = React.useState(false);

    constructor() {
        super();
        this.state = {
            cdStudent:'',
            idStudent:'',
            nmStudent:'',
            showModal: true
        };
        this.continueModalHandler = this.continueModalHandler.bind(this);
    }

    continueModalHandler( event ) {
        debugger;
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
    
    setValue(fieldName, event) {
        this.setState({[fieldName]:event.target.value});
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <Modal
            show={true}
            className={"modal-wrapper"}
            
          />
        );
    }

    
}


/**
 *             <Modal
                className="modal"
                show={this.state.showModal}
                close={this.closeModalHandler}
                continue={this.continueModalHandler}
                title="Cadastro de alunos">
                <div className="content-section implementation">
                    <form>
                        <Input id="idStudent" type="text" value={this.state.idStudent} onChange={this.setValue.bind(this, 'idStudent')} label="Matrícula" />
                        <Input id="nmStudent" type="text" value={this.state.nmStudent} onChange={this.setValue.bind(this, 'nmStudent')} label="Nome" />
                    </form>
                </div>
            </Modal>
 */