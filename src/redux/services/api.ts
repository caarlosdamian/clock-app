import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTime = createAsyncThunk("time/api", async () => {
  const response = await axios("http://worldtimeapi.org/api/ip");
  const { data } = response;
  return data;
});

// export const fetchTimeZones = createAsyncThunk("timeZone/api", async () => {
//   const response = await axios(
//     `https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_API_KEY}`
//   );
//   const { data } = response;
//   return data.data;
// });

export const fetchQuotable = createAsyncThunk("quote/api", async () => {
  const response = await axios("https://api.quotable.io/random");
  const { data } = response;
  return data;
});

export const fetchLocation = createAsyncThunk("location/api", async () => {
  const response = await axios("https://geolocation-db.com/json/");
  const { data } = response;
  return data;
});
