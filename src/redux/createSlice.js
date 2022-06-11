import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, { payload }) => [payload, ...state],
    deleteContacts: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

// Action creators are generated for each case reducer function
export const { addContacts, deleteContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
