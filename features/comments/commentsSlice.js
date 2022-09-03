import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(baseUrl + "comments");
    return response.json();
  }
);
const initialState = {
  isLoading: true,
  errMess: null,
  commentsArr: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.commentsArr.push(action.payload);
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.commentsArr = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading;
      state.errMess = action.error ? action.error.message : "rejected";
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
