import types from "./phonebook-types";
import shortid from "shortid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filterContact = (value) => ({
  type: types.FILTER,
  payload: value,
});

const modal = ({ showModal }) => ({
  type: types.TOGGLE_MODAL,
  payload: { showModal: !showModal, }

});

export default { addContact, deleteContact, filterContact, modal };
