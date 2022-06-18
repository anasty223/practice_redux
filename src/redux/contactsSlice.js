import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.value = [
        { createdAt: Date.now(), id: nanoid(), ...payload },
        ...state.value,
      ];
    },
    editContact(state, { payload }) {
      const contactIndex = state.value.findIndex((el) => el.id === payload.id);
      state.value[contactIndex] = { ...state.value[contactIndex], ...payload };
    },
    deleteContact(state, { payload }) {
      state.value = state.value.filter((el) => el.id !== payload);
    },
  },
});
export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
