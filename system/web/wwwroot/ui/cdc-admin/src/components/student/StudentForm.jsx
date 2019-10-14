import React, { Component } from 'react';
import CustomInput          from '../InputElements/CustomInput';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';
import ErrorHandler         from '../validation/ErrorHandler';
import Modal                from '../Modal/Modal';
import Backdrop             from '../Backdrop/Backdrop';

export default class StudentForm extends Component {


    //const [modalShow, setModalShow] = React.useState(false);

    constructor() {
        super();
        this.state = {
            cdStudent:'',
            idStudent:'',
            nmStudent:''
        };
        this.sendStudent = this.sendStudent.bind(this);
    }

    //TODO Criar classe de action
    sendStudent() {
        $.ajax({
            url: "https://localhost:8443/students/" + this.props.action,
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({
                cdStudent: this.state.cdStudent,
                idStudent:this.state.idStudent,
                nmStudent:this.state.nmStudent
            }),
            success: function(newList) {
                PubSub.publish('refresh-list-students', newList);
                this.setState({cdStudent:'', idStudent:'', nmStudent:''});
                this.setAction(-1); //TODO fazer essa ação no retorno do metodo
            }.bind(this),
            error: function(response) {
                if(response.status === 400) { //bad request
                    new ErrorHandler().publishError(response.responseJSON);
                } else if (response.status === 0) {
                    console.log("could not connect to backend application");
                }
            },
            beforeSend: function() {
                PubSub.publish('form-error-clean');
            }
        });
    }

    setValue(fieldName, event) {
        this.setState({[fieldName]:event.target.value});
    }

    componentDidUpdate() {
        if (this.props.action === 2 || this.props.action === 3) {
            if (this.state.cdStudent !== this.props.selectedElm.cdStudent) {
                this.setState({
                    cdStudent: this.props.selectedElm.cdStudent,
                    idStudent: this.props.selectedElm.idStudent,
                    nmStudent: this.props.selectedElm.nmStudent
                });

                if (this.props.action === 3) {
                    this.deleteStudent();
                }
            }
        } else {
            if (this.state.cdStudent !== "") {
                this.setState({
                    cdStudent: "",
                    idStudent: "",
                    nmStudent: ""
                });
            }
        }
    }

    deleteStudent = () => {
        if (window.confirm("Deseja realmente excluir?")) {
            this.sendStudent();
            PubSub.publish('refresh-selected-student', []);
        } else {
            this.setAction(-1);
        }
    }

    modalConfirmHandler = () => {
        this.sendStudent();
    };

    modalCancelHandler = () => {
        this.setState({cdStudent:'', idStudent:'', nmStudent:''});
        this.setAction(-1);
    };

    setAction(action) {
        PubSub.publish('refresh-action-students', action);
    };

    render() {
        return (
            <div>
                {(this.props.action === 1 || this.props.action === 2) && <Backdrop />}
                {(this.props.action === 1 || this.props.action === 2) && (
                <Modal
                    title="Opabier"
                    canCancel
                    canConfirm
                    onCancel={this.modalCancelHandler}
                    onConfirm={this.modalConfirmHandler}
                >
                    <CustomInput id="idStudent" type="text" value={this.state.idStudent} onChange={this.setValue.bind(this, 'idStudent')} label="Matrícula" />
                    <CustomInput id="nmStudent" type="text" value={this.state.nmStudent} onChange={this.setValue.bind(this, 'nmStudent')} label="Nome" />
                </Modal>
                )}
            </div>
        );
    }
}