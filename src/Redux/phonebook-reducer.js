import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

// const state = {
//     contacts: {
//         items: [],
//         filter: '',
//
//     }
// };

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
