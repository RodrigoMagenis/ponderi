import React, { Component } from 'react';
import CustomGrid from '../DataElements/CustomGrid';

export default class QuestionTable extends Component {

    render() {
        return (
            <CustomGrid {...this.props}
                columns={[
                    {
                        field:'idQuestion',
                        header:'Identificador',
                        sortable:true
                    },
                    {
                        field:'nmStatement',
                        header:'Pergunta',
                        sortable:false
                    },
                    {
                        field:'fgCorrectAnswer',
                        header:'Resposta correta',
                        sortable:true
                    }
                ]}
            />
        );
    }
}