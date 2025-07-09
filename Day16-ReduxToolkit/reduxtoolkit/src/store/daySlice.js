import { createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
  name: "frack",
  initialState: {
    value: 16,
  },
  reducers: {
    plusDay: (state) => {
      state.value += 1;
    },
    minusDay: (state) => {
      state.value -= 1;
    },
    byHundred: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { plusDay, minusDay, byHundred } = daySlice.actions;

export default daySlice.reducer;
