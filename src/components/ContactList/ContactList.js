import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook-actions";
import "./ContactList.css";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteContact } from "./bin.svg";

const ContactList = ({ contacts, onDelete }) => {
  console.log("contacts");
  console.log(contacts);
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

const getfilteredContactList = (allContacts, filter) => {
  const normolizeFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normolizeFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normolizeFilter = filter.toLowerCase();
  console.log(items);
  console.log(items);
  const visibleContacts = getfilteredContactList(items, filter);
  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
