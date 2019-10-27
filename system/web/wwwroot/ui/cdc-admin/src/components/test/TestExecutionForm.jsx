import React, { Component } from 'react';
import CustomDropdown       from '../InputElements/CustomDropdown';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';
import ErrorHandler         from '../validation/ErrorHandler';
import Modal                from '../Modal/Modal';
import Backdrop             from '../Backdrop/Backdrop';

export default class TestExecutionForm extends Component {

    //TODO Criar tabela separada para respostas
    constructor() {
        super();
        this.state = {
            cdStudent: '',
            cdTest: '',
            options: [
                {label: 'Resposta 1', value: 1},
                {label: 'Resposta 2', value: 2},
                {label: 'Resposta 3', value: 3},
                {label: 'Resposta 4', value: 4},
                {label: 'Resposta 5', value: 5}
            ]
        };
        this.sendTestExecution = this.sendTestExecution.bind(this);
    }

    //TODO Criar classe de action
    sendTestExecution() {
        $.ajax({
            url: "https://localhost:8443/testsexecution/" + this.props.action,
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({
                cdTest: this.state.cdTest,
                cdStudent: this.state.cdStudent
            }),
            success: function(newList) {
                PubSub.publish('refresh-list-testsexecution', newList);
                this.cleanForm();

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
                PubSub.publish('testexecution-error-clean');
            }
        });
    }

    setValue(fieldName, event) {
        this.setState({[fieldName]:event.target.value});
    }

    componentDidUpdate(prevProps) {
        // #TODO rever questão do edit não listar questões corretamente
        if (this.props.action !== prevProps.action && this.props.action !== -1) {
            if (this.state.cdTest !== this.props.selectedElm.cdTest && this.state.cdStudent !== this.props.selectedElm.cdStudent) {
                if (this.props.action === 2 || this.props.action === 3) {
                    this.setState({
                        cdTest: this.props.selectedElm.cdTest,
                        cdStudent: this.props.selectedElm.cdStudent
                    });

                    if (this.props.action === 3) {
                        this.deleteTestExecution();
                    }
                }
            }
        }
    }


    deleteTestExecution = () => {
        if (window.confirm("Deseja realmente excluir?")) {
            this.sendTestExecution();
            PubSub.publish('refresh-selected-testexecution', []);
        } else {
            this.setAction(-1);
        }
    }

    cleanForm = () => {
        this.setState({
            cdTest: '',
            cdStudent: ''
        });
    }

    modalConfirmHandler = () => {
        this.sendTestExecution();
    };

    modalCancelHandler = () => {
        this.cleanForm();
        this.setAction(-1);
    };

    setAction(action) {
        PubSub.publish('refresh-action-testsexecution', action);
    };

    render() {
        return (
            <div>
                {(this.props.action === 1 || this.props.action === 2) && <Backdrop />}
                {(this.props.action === 1 || this.props.action === 2) && (
                <Modal
                    title="Execução das avaliações"
                    canCancel
                    canConfirm
                    onCancel={this.modalCancelHandler}
                    onConfirm={this.modalConfirmHandler}
                >
                    <CustomDropdown id="test" options={this.state.options} value={this.state.cdTest} onChange={event => this.setState({cdTest: event.value})} />
                </Modal>
                )}
            </div>
        );
    }
}