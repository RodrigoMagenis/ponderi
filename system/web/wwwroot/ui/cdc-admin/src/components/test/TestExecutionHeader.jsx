import React, { Component } from 'react';
import {Menubar} from 'primereact/menubar';
import PubSub               from 'pubsub-js';


export default class TestExecutionHeader extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            selectedElm: ["empty"]
        };
    }

    componentDidUpdate() {
        if(this.state.selectedElm !== this.props.selectedElm) {
            this.setState({
                selectedElm: this.props.selectedElm,
                items: [
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        disabled: false,
                        command: (event) => {this.setAction(1);}
                    },
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        disabled: this.props.selectedElm.length === 0,
                        command: (event) => {this.setAction(2);}
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash',
                        disabled: this.props.selectedElm.length === 0,
                        command: (event) => {this.setAction(3);}
                    }
                ]
            });
        }
    }

    setAction(action) {
        PubSub.publish('refresh-action-testsexecution', action);
    }

    render() {
        return (
            <div className="content-header-buttons">
                <Menubar model={this.state.items} />
            </div>
        );
    }
}