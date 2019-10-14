import React, {Component} from 'react';
import {Button} from 'primereact/button';
import './BasicButton.css';
export default class BasicButton extends Component {
    render() {
        return (
            <div id={"div-" + this.props.id}>
                <Button id={this.props.id} label={this.props.label} className="btn-basic" onClick={this.handleClick}/>
            </div>
        );
    }
}