import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchCampsites = createAsyncThunk(
  "campsites/fetchCampsites",
  async () => {
    const response = fetch(baseUrl + "campsites");
    console.log(response);
    return response.json();
  }
);
const initialState = {
  isLoading: true,
  errMess: null,
  campsitesArr: [],
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.campsitesArr = action.payload;
    },
    [fetchCampsites.rejected]: (state, action) => {
      state.isLoading;
      state.errMess = action.error ? action.error.message : "rejected";
    },
  },
});

export const campsitesReducer = campsitesSlice.reducer;
