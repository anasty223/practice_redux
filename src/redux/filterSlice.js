import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, payload) {
      state.filter = payload;
    },
    deleteFilter(state) {
      state.filter = initialState;
    },
  },
});

export const { changeFilter, deleteFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
