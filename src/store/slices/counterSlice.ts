import { createSlice } from "@reduxjs/toolkit";

interface initialProps {
  value: number;
  isLoading: boolean;
}

const initialState = {
  value: 0,
  isLoading: false,
} as initialProps;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value < 1) {
        return alert("Value can't be less than 0");
      }
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
