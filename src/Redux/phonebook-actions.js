import {createAction} from '@reduxjs/toolkit'
import types from "./phonebook-types";
import shortid from "shortid";


const addContact = createAction(types.ADD, ({name, number}) => ({
  payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
}));
const deleteContact = createAction(types.DELETE);
const filterContact = createAction(types.FILTER);


export default { addContact, deleteContact, filterContact };
