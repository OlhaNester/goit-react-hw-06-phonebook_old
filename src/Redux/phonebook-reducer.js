import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import types from "./phonebook-types";

// const state = {
//     contacts: {
//         items: [],
//         filter: '',
//
//     }
// };

const items = createReducer([], {
  'contact/add': (state, { payload }) => [...state, payload],
  'contact/delete': (state, { payload }) => state.filter(({ id }) => id !== payload),
});


const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
