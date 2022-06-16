import React from "react";
import './SelectedBeast.css';
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component{

  render(){
    return(
      <>
      <Modal as="modal" show={this.props.showModal} onHide={this.props.handleOnHide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body as="modal-body">
          <img src={this.props.selectedBeast} alt={this.props.beastDesc} width="500" height="500"></img>
          <p>{this.props.beastDesc}</p>
          </Modal.Body>
      </Modal>
      </>
    )
  }
}

export default SelectedBeast;