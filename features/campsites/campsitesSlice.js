import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  campsites: [],
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
});

export const campsitesReducer = campsitesSlice.reducer;
