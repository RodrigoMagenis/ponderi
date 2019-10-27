import React, { Component } from 'react';
import CustomGrid from '../DataElements/CustomGrid';

export default class QuestionExecutionTable extends Component {

    render() {
        return (
            <CustomGrid {...this.props}
                columns={[
                    {
                        field:'idTest',
                        header:'Avaliação',
                        sortable:true
                    },
                    {
                        field:'idStudent',
                        header:'Aluno',
                        sortable:true
                    }
                ]}
            />
        );
    }
}