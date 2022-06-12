import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/createSlice";

import { filterReducer } from "./filterSlice";
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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const contactsReducerAll = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducerAll
);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor };
