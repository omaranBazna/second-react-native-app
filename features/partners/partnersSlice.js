import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async () => {
    const response = await fetch(baseUrl + "partners");
    return response.json();
  }
);
const initialState = {
  isLoading: true,
  errMess: null,
  partnersArr: [],
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPartners.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPartners.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.partnersArr = action.payload;
    },
    [fetchPartners.rejected]: (state, action) => {
      state.isLoading;
      state.errMess = action.error ? action.error.message : "rejected";
    },
  },
});

export const partnersReducer = partnersSlice.reducer;
