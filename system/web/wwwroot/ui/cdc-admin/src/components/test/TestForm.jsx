import React, { Component } from 'react';
import CustomInput          from '../InputElements/CustomInput';
import CustomPickList       from  '../DataElements/CustomPickList';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';
import ErrorHandler         from '../validation/ErrorHandler';
import Modal                from '../Modal/Modal';
import Backdrop             from '../Backdrop/Backdrop';

export default class TestForm extends Component {

    //TODO Criar tabela separada para respostas
    constructor() {
        super();
        this.state = {
            cdTest: '',
            idTest: '',
            picklistSourceQuestions: [],
            picklistTargetQuestions: []
        };
        this.sendTest = this.sendTest.bind(this);
        this.pickListTemplate = this.pickListTemplate.bind(this);
        this.pickListOnChange = this.pickListOnChange.bind(this);
    }

    //TODO Criar classe de action
    sendTest() {
        $.ajax({
            url: "https://localhost:8443/tests/" + this.props.action,
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({
                cdTest: this.state.cdTest,
                idTest: this.state.idTest,
                questions: this.state.picklistTargetQuestions
            }),
            success: function(newList) {
                PubSub.publish('refresh-list-tests', newList);
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
                PubSub.publish('test-error-clean');
            }
        });
    }

    setValue(fieldName, event) {
        this.setState({[fieldName]:event.target.value});
    }

    componentDidUpdate(prevProps) {
        // #TODO rever questão do edit não listar questões corretamente
        if (this.props.action !== prevProps.action && this.props.action !== -1) {
            if (this.state.cdTest !== this.props.selectedElm.cdTest) {
                if (this.props.action === 2 || this.props.action === 3) {
                    var questionList = this.state.picklistSourceQuestions;
                    this.props.selectedElm.questions.forEach(function(elm) {
                        questionList.forEach(function(elm2, index) {
                            if(elm.cdQuestion === elm2.cdQuestion) {
                                delete questionList[index];
                            }
                        });
                    });

                    this.setState({
                        cdTest: this.props.selectedElm.cdTest,
                        idTest: this.props.selectedElm.idTest,
                        picklistTargetQuestions: this.props.selectedElm.questions,
                        picklistSourceQuestions: questionList
                    });

                    if (this.props.action === 3) {
                        this.deleteTest();
                    }
                }
            }
        }
    }

    refreshQuestionsList() {
        $.ajax({
            url: "https://localhost:8443/questions",
            dataType: 'json',
            type: 'get',
            async: false,
            success:function(response) {
                debugger;
                this.setState({picklistSourceQuestions: response});
            }.bind(this)
        });
    }

    componentDidMount() {
        this.refreshQuestionsList();
    }

    deleteTest = () => {
        if (window.confirm("Deseja realmente excluir?")) {
            this.sendTest();
            PubSub.publish('refresh-selected-test', []);
        } else {
            this.setAction(-1);
        }
    }

    cleanForm = () => {
        this.setState({
            cdTest: '',
            idTest: '',
            picklistSourceQuestions: [],
            picklistTargetQuestions: []
        });
    }

    modalConfirmHandler = () => {
        this.sendTest();
    };

    modalCancelHandler = () => {
        this.cleanForm();
        this.setAction(-1);
    };

    setAction(action) {
        PubSub.publish('refresh-action-tests', action);
    };

    pickListTemplate(question){
        return <div className="p-clearfix">
            <div style={{fontSize:'12px', float:'right', margin:'15px 5px 0 0'}}>{question.idQuestion}</div>
        </div>
    }

    pickListOnChange(event) {
        this.setState({picklistSourceQuestions: event.source, picklistTargetQuestions: event.target});
    }

    render() {
        return (
            <div>
                {(this.props.action === 1 || this.props.action === 2) && <Backdrop />}
                {(this.props.action === 1 || this.props.action === 2) && (
                <Modal
                    title="Cadastro de avaliações"
                    canCancel
                    canConfirm
                    onCancel={this.modalCancelHandler}
                    onConfirm={this.modalConfirmHandler}
                >
                    <CustomInput id="idTest" type="text" value={this.state.idTest} onChange={this.setValue.bind(this, 'idTest')} label="Identificador" />
                    <CustomPickList
                        sourceHeader="Questões"
                        targetHeader="Selecionadas"
                        picklistSource={this.state.picklistSourceQuestions}
                        picklistTarget={this.state.picklistTargetQuestions}
                        onChange={event => this.pickListOnChange(event)}
                        itemTemplate={this.pickListTemplate}
                    />
                </Modal>
                )}
            </div>
        );
    }
}