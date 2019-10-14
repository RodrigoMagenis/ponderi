import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column'

export default class CustomGrid extends Component {
    render() {
        return (
            <div>
                <DataTable
                    value={this.props.list}
                    paginatorPosition="bottom"
                    selectionMode="single"
                    /*header="List of Cars"*/
                    paginator={true}
                    rows={25}
                    responsive={true}
                    selection={this.props.selectedElm}
                    onSelectionChange={event => this.props.callbackSelection(event.value) /*this.setState({elm: event.value})*/}
                >
                    {
                        this.props.columns.map(function(col) {
                            return (
                                <Column
                                    field={col.field}
                                    header={col.header}
                                    sortable={col.sortable}
                                />
                            );
                        })
                    }
                </DataTable>
            </div>
        );
    }
}


