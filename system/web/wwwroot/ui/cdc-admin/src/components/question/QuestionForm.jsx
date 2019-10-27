import React, { Component } from 'react';
import CustomInput          from '../InputElements/CustomInput';
import CustomDropdown       from '../InputElements/CustomDropdown';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';
import ErrorHandler         from '../validation/ErrorHandler';
import Modal                from '../Modal/Modal';
import Backdrop             from '../Backdrop/Backdrop';

export default class QuestionForm extends Component {

    //TODO Criar tabela separada para respostas
    constructor() {
        super();
        this.state = {
            cdQuestion: null,
            idQuestion:'',
            nmStatement:'',
            nmAnswer1:'',
            nmAnswer2:'',
            nmAnswer3:'',
            nmAnswer4:'',
            nmAnswer5:'',
            fgCorrectAnswer: {label: 'Selecione a resposta correta', value: null},
            a: null,
            options: [
                /* {label: 'Selecione a resposta correta', value: null}, */
                {label: 'Resposta 1', value: 1},
                {label: 'Resposta 2', value: 2},
                {label: 'Resposta 3', value: 3},
                {label: 'Resposta 4', value: 4},
                {label: 'Resposta 5', value: 5}
            ]
        };
        this.sendQuestion = this.sendQuestion.bind(this);
        this.callbackCorrectAnswer = this.callbackCorrectAnswer.bind(this);
    }

    //TODO Criar classe de action
    sendQuestion() {
        debugger;
        $.ajax({
            url: "https://localhost:8443/questions/" + this.props.action,
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({
                cdQuestion: this.state.cdQuestion,
                idQuestion:this.state.idQuestion,
                nmStatement:this.state.nmStatement,
                nmAnswer1:this.state.nmAnswer1,
                nmAnswer2:this.state.nmAnswer2,
                nmAnswer3:this.state.nmAnswer3,
                nmAnswer4:this.state.nmAnswer4,
                nmAnswer5:this.state.nmAnswer5,
                fgCorrectAnswer:this.state.fgCorrectAnswer
            }),
            success: function(newList) {
                debugger;
                PubSub.publish('refresh-list-questions', newList);
                this.cleanForm();

                this.setAction(-1); //TODO fazer essa ação no retorno do metodo
            }.bind(this),
            error: function(response) {
                debugger;
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
            if (this.state.cdQuestion !== this.props.selectedElm.cdQuestion) {
                this.setState({
                    cdQuestion: this.props.selectedElm.cdQuestion,
                    idQuestion: this.props.selectedElm.idQuestion,
                    nmStatement: this.props.selectedElm.nmStatement,
                    nmAnswer1: this.props.selectedElm.nmAnswer1,
                    nmAnswer2: this.props.selectedElm.nmAnswer2,
                    nmAnswer3: this.props.selectedElm.nmAnswer3,
                    nmAnswer4: this.props.selectedElm.nmAnswer4,
                    nmAnswer5: this.props.selectedElm.nmAnswer5,
                    fgCorrectAnswer:  this.props.selectedElm.fgCorrectAnswer
                });

                if (this.props.action === 3) {
                    this.deleteQuestion();
                }
            }
        } else {
            if (this.state.cdQuestion !== "") {
                this.cleanForm();
            }
        }
    }

    deleteQuestion = () => {
        if (window.confirm("Deseja realmente excluir?")) {
            this.sendQuestion();
            PubSub.publish('refresh-selected-question', []);
        } else {
            this.setAction(-1);
        }
    }

    cleanForm = () => {
        this.setState({
            cdQuestion:'',
            idQuestion:'',
            nmStatement:'',
            nmAnswer1:'',
            nmAnswer2:'',
            nmAnswer3:'',
            nmAnswer4:'',
            nmAnswer5:'',
            fgCorrectAnswer: ''
        });
    }

    modalConfirmHandler = () => {
        this.sendQuestion();
    };

    modalCancelHandler = () => {
        this.cleanForm();
        this.setAction(-1);
    };

    async callbackCorrectAnswer(value){
        debugger;
        await this.setState({fgCorrectAnswer: value});
    }

    setAction(action) {
        PubSub.publish('refresh-action-questions', action);
    };

    render() {
        return (
            <div>
                {(this.props.action === 1 || this.props.action === 2) && <Backdrop />}
                {(this.props.action === 1 || this.props.action === 2) && (
                <Modal
                    title="Cadastro de questões"
                    canCancel
                    canConfirm
                    onCancel={this.modalCancelHandler}
                    onConfirm={this.modalConfirmHandler}
                >
                    <CustomInput id="idQuestion" type="text" value={this.state.idQuestion} onChange={this.setValue.bind(this, 'idQuestion')} label="Identificador" />
                    <CustomInput id="nmStatement" type="text" value={this.state.nmStatement} onChange={this.setValue.bind(this, 'nmStatement')} label="Pergunta" />
                    <CustomInput id="nmAnswer1" type="text" value={this.state.nmAnswer1} onChange={this.setValue.bind(this, 'nmAnswer1')} label="Resposta A" />
                    <CustomInput id="nmAnswer2" type="text" value={this.state.nmAnswer2} onChange={this.setValue.bind(this, 'nmAnswer2')} label="Resposta B" />
                    <CustomInput id="nmAnswer3" type="text" value={this.state.nmAnswer3} onChange={this.setValue.bind(this, 'nmAnswer3')} label="Resposta C" />
                    <CustomInput id="nmAnswer4" type="text" value={this.state.nmAnswer4} onChange={this.setValue.bind(this, 'nmAnswer4')} label="Resposta D" />
                    <CustomInput id="nmAnswer5" type="text" value={this.state.nmAnswer5} onChange={this.setValue.bind(this, 'nmAnswer5')} label="Resposta E" />
                    <CustomDropdown id="fgCorretAnswer" options={this.state.options} value={this.state.fgCorrectAnswer} onChange={event => this.setState({fgCorrectAnswer: event.value})} />
                </Modal>
                )}
            </div>
        );
    }
}