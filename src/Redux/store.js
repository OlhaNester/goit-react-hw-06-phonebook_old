import {
  configureStore,
  getDefaultMiddleware,
  //combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from "./phonebook-reducer";
import logger from "redux-logger";

// const state = {
//     contacts: {
//         items: [],
//         filters: '',
//
//     }
// };

const contactPersistConfig = {
  key: "contact",
  storage,
  blacklist: ["filter"],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, phonebookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
