import { createSlice } from "@reduxjs/toolkit";
import { TimeZonesliceInitState } from "../../common/interfaces";
import { TimeZoneInitState } from "../../utils";
import { fetchTimeZones } from "../services/api";

const initialState: TimeZonesliceInitState = {
  data: TimeZoneInitState,
  timeZoneFetching: false,
  isError: false,
};

export const TimeZoneSlice = createSlice({
  name: "timeZone",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTimeZones.fulfilled, (state, action) => {
      (state.data = action.payload),
        (state.isError = false),
        (state.timeZoneFetching = false);
    });
    builder.addCase(fetchTimeZones.pending, (state, action) => {
      state.timeZoneFetching = true;
    });
    builder.addCase(fetchTimeZones.rejected, (state, action) => {
      (state.isError = true), (state.timeZoneFetching = false);
    });
  },
});

export default TimeZoneSlice.reducer;
