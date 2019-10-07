import React, { Component } from 'react';
import CustomGrid from '../DataElements/CustomGrid';

export default class StudentTable extends Component {

    render() {
        return (
            <CustomGrid {...this.props}
                columns={[
                    {
                        field:'idStudent',
                        header:'Matrícula',
                        sortable:true
                    },
                    {
                        field:'nmStudent',
                        header:'Nome',
                        sortable:true
                    }
                ]}
            />
        );
    }
}