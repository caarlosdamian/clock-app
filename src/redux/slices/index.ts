import { combineReducers } from "@reduxjs/toolkit";
import TimeReducer from "./timeSlice";
import QuotesReducer from "./quotableSlice";
import LocationReducer from "./locationSlice";

export const reducer = combineReducers({
  time: TimeReducer,
  quote: QuotesReducer,
  location: LocationReducer,
});
