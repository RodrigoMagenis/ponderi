import React, { Component } from 'react';
import CustomGrid from '../DataElements/CustomGrid';

export default class QuestionTable extends Component {

    render() {
        return (
            <CustomGrid {...this.props}
                columns={[
                    {
                        field:'idTest',
                        header:'Identificador',
                        sortable:true
                    },
                    {
                        field:'fgStatus',
                        header:'Situação',
                        sortable:true
                    },
                    {
                        field:'dtStart',
                        header:'Data de criação',
                        sortable:true
                    },
                    {
                        field:'dtFinish',
                        header:'Data de encerramento',
                        sortable:true
                    },
                    {
                        field:'qtQuestions',
                        header:'Quantidade de questões',
                        sortable:true
                    }
                ]}
            />
        );
    }
}