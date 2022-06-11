import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "../redux/createSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
