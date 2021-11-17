import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from "./phonebook-reducer";
import logger from 'redux-logger';

// const state = {
//     contacts: {
//         items: [],
//         filters: '',
//
//     }
// };

console.log(getDefaultMiddleware());
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
  contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV==='development',
})
export default store;
