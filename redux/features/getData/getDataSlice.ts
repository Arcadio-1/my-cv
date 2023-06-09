import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GetDataState = {
  my_cv: [];
};

const initialState = {
  my_cv: [],
} as GetDataState;

const getDataSlice = createSlice({
  name: "getDataSlice",
  initialState,
  reducers: {
    getCv(state, action) {
      state.my_cv = action.payload;
    },
  },
});

export const getDataSliceActions = getDataSlice.actions;
export default getDataSlice.reducer;

// export const {
//   increment,
//   incrementByAmount,
//   decrement,
//   decrementByAmount,
//   reset,
// } = counter.actions;
// export default counter.reducer;
