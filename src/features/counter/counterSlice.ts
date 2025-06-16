import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => {
      state.value++;
    },
    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decremented: (state) => {
      state.value--;
    },
    amountSubtracted: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { incremented, amountAdded, decremented, amountSubtracted } =
  counterSlice.actions;
export default counterSlice.reducer;
