import React, {Component} from 'react';
import {Button} from 'primereact/button';
export default class BotaoCustomizado extends Component {
    render() {
        return (
            <div className="pure-control-group">
                <label>{this.props.label}</label>
                <Button id={this.props.id} type={this.props.type} className={this.props.className} label={this.props.title}/>
            </div>
        );
    }
}