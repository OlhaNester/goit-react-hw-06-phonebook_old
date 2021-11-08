import React from "react";
import { connect } from 'react-redux';
import phonebookActions from '../../Redux/phonebook-actions';
import "./ContactList.css";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteContact } from "./bin.svg";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li id={id} className="card_contact">
          <span>{name} </span>
          <span> {number}</span>

          <IconButton onClick={() => onDelete(id)}>
            <DeleteContact />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
})
const mapDispatchToProps = dispatch => ({
  onDelete: (id)=>dispatch(phonebookActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
