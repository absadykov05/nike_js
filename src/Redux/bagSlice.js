import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  bagPrice: 0,
};

export const BagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addSneaker: (state, action) => {
      state.data = [...state.data, action.payload];
      state.bagPrice += Number(action.payload.price);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSneaker } = BagSlice.actions;

export default BagSlice.reducer;
