import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css';

const Modal = props => {
  return ReactDOM.createPortal(
    <div 
      onClick={props.onDismiss}
      className="modal"
    >
      <div 
      onClick={(e) => e.stopPropagation()} 
      className="modal-content"
      >
        <div className="modal-header"><h3>{props.title}</h3></div>
        <div className="modal-body">
          {props.content}
        </div>
        <div className="modal-footer">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;