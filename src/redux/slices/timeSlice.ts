import { createSlice } from "@reduxjs/toolkit";
import { TimeSliceI } from "../../common/interfaces";
import { fetchTime } from "../services/api";

const initialState: TimeSliceI = {
  data: {
    abbreviation: "",
    client_ip: "",
    datetime: "",
    day_of_week: 1,
    day_of_year: 58,
    dst: false,
    dst_from: null,
    dst_offset: 0,
    dst_until: null,
    raw_offset: -21600,
    timezone: "America/Mexico_City",
    unixtime: 1677557330,
    utc_datetime: "2023-02-28T04:08:50.517459+00:00",
    utc_offset: "-06:00",
    week_number: 9,
  },
  timeFetching: false,
  isError: false,
};

export const TimeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTime.fulfilled, (state, action) => {
      (state.data = action.payload),
        (state.isError = false),
        (state.timeFetching = false);
    });
    builder.addCase(fetchTime.pending, (state, action) => {
      state.timeFetching = true;
    });
    builder.addCase(fetchTime.rejected, (state, action) => {
      (state.isError = true), (state.timeFetching = false);
    });
  },
});

export default TimeSlice.reducer;
