import { createSlice } from "@reduxjs/toolkit";
import { fetchQuotable } from "../services/api";

const initialState = {
  data: [],
  quoteFetching: false,
  isError: false,
};

export const Quoteslice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuotable.fulfilled, (state, action) => {
      (state.data = action.payload),
        (state.isError = false),
        (state.quoteFetching = false);
    });
    builder.addCase(fetchQuotable.pending, (state, action) => {
      state.quoteFetching = true;
    });
    builder.addCase(fetchQuotable.rejected, (state, action) => {
      (state.isError = true), (state.quoteFetching = false);
    });
  },
});

export default Quoteslice.reducer;
