import React, { Component } from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
import "./Modal.css";
import phonebookActions from "../../redux/phonebook-actions";

const modalRoot = document.querySelector("#modalRoot");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackDrop = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Modal_backdrop" onClick={this.handleBackDrop}>
        <div className="Modal_content">{this.props.children}</div>
      </div>, modalRoot
    );
  }
};
const mapStateToProps = (state) => {
  const { showModal } = state.contacts;
  return { showModal: !showModal }
};

const mapDispatchToProps = (dispatch) => ({
  handleBackDrop: (event) => dispatch(phonebookActions.modal()),
});


connect(mapStateToProps, mapDispatchToProps)(Modal);

