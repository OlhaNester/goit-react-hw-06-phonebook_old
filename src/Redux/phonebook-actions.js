import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));
const deleteContact = createAction("contact/delete");
const filterContact = createAction("contact/filter");

export default { addContact, deleteContact, filterContact };
