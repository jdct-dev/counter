import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counters",
  initialState: {
    list: [{ id: 1, value: 0 }],
  },
  reducers: {
    increment: (state, action) => {
      const counter = state.list.find((c) => c.id === action.payload);
      if (counter) counter.value += 1;
    },
    decrement: (state, action) => {
      const counter = state.list.find((c) => c.id === action.payload);
      if (counter) counter.value -= 1;
    },
    reset: (state, action) => {
      const counter = state.list.find((c) => c.id === action.payload);
      if (counter) counter.value = 0;
    },
    addCounter: (state) => {
      const nextId =
        state.list.length > 0
          ? Math.max(...state.list.map((c) => c.id)) + 1
          : 1;
      state.list.push({ id: nextId, value: 0 });
    },
    removeCounter: (state, action) => {
      return {
        ...state,
        list: state.list.filter((c) => c.id !== action.payload),
      };
    },
  },
});

export const { increment, decrement, reset, addCounter, removeCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
