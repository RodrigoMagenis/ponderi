import React, { Component } from 'react';

export default class StudentTable extends Component {
    render() {
        return (
            <div>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Matrícula</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.list.map(function(student) {
                            return (
                                <tr key={student.cdStudent}>
                                    <td>{student.idStudent}</td>
                                    <td>{student.nmStudent}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}