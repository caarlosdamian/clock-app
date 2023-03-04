import { createSlice } from "@reduxjs/toolkit";
import { LocationsliceI } from "../../common/interfaces";
import { LocationInitstate } from "../../utils";
import { fetchLocation } from "../services/api";

const initialState: LocationsliceI = {
  locationFetching: false,
  data: LocationInitstate,
  isError: false,
};

export const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.data = action.payload;
      state.locationFetching = false;
      state.isError = false;
    });
    builder.addCase(fetchLocation.pending, (state, action) => {
      state.locationFetching = true;
      state.isError = false;
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      state.locationFetching = false;
      state.isError = true;
    });
  },
});

export default LocationSlice.reducer;
