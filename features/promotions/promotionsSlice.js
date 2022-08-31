import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchPromotions = createAsyncThunk(
  "promotions/fetchPromotions",
  async () => {
    const response = await fetch(baseUrl + "promotions");
    return response.json();
  }
);
const initialState = {
  isLoading: true,
  errMess: null,
  promotionsArr: [],
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.promotionsArr = action.payload;
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading;
      state.errMess = action.error ? action.error.message : "rejected";
    },
  },
});

export const promotionsReducer = promotionsSlice.reducer;
