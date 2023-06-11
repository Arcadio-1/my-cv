import { CV } from "@/app/util/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GetDataState = {
  my_cv_database: CV | [];
  my_cv_server: CV | [];
};

const initialState = {
  my_cv_database: [],
  my_cv_server: [],
} as GetDataState;

const getDataSlice = createSlice({
  name: "getDataSlice",
  initialState,
  reducers: {
    set_database_cv(state, action: PayloadAction<CV>) {
      state.my_cv_database = action.payload;
    },
    set_server_cv(state, action: PayloadAction<CV>) {
      state.my_cv_server = action.payload;
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
