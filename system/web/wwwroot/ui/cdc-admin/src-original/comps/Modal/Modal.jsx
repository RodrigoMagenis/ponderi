import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './Modal.css';

const modal = (props) => {
    return (
        <div className="modal-wrapper">
            <Modal {...props} size="lg" aria-labelledby="modal-wrapper" centered>
                <Modal.Header id="closeButton" className="close-modal-btn">
                <Modal.Title className="modal-header">
                    X
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-cancel" onClick={props.close}>Cancelar</button>
                    <button className="btn-continue" onClick={props.continue}>Continuar</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default modal;


/*
<div className="modal-wrapper"
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-header">
                <h3>{props.title}</h3>
                <span className="close-modal-btn" onClick={props.close}>×</span>
            </div>
            <div className="modal-body">
                
                    {props.children}
                
            </div>
            <div className="modal-footer">
                <button className="btn-cancel" onClick={props.close}>Cancelar</button>
                <button className="btn-continue" onClick={props.continue}>Continuar</button>
            </div>
        </div>
*/