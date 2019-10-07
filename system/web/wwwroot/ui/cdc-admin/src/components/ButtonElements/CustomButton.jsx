import React, {Component} from 'react';
import {Button} from 'primereact/button';

export default class CustomButton extends Component {
    render() {
        return (
            <div id={"div-" + this.props.id}>
                <Button
                    id={this.props.id}
                    type={this.props.type}
                    className="p-button-raised"
                    label={this.props.label}
                />
            </div>
        );
    }
}


/* {...this.props} spread operator */