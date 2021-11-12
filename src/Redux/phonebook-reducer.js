import { combineReducers } from "redux";
import types from "./phonebook-types";

// const state = {
//     contacts: {
//         items: [],
//         filter: '',
//         showModal: false,
//     }
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

const showModal = (state = false, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_MODAL:
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  items,
  filter,
  showModal,
});
