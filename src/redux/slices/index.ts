import { combineReducers } from "@reduxjs/toolkit";
import TimeReducer from "./timeSlice";
import TimeZoneReducer from "./timeZoneSlice";
import QuotesReducer from "./quotableSlice";

export const reducer = combineReducers({
  time: TimeReducer,
  timeZone: TimeZoneReducer,
  quote: QuotesReducer,
});
