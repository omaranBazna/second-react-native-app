import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(baseUrl + "comments");
    return response.json();
  }
);
export const postComment = createAsyncThunk(
  "comments/postComment",
  async (payload, { dispatch, getState }) => {
    setTimeout(() => {
      const { comments } = getState();

      const d = new Date();
      payload.date = d.toISOString();
      payload.id = comments.commentsArr.length;
      dispatch(addComment(payload));
    }, 2000);
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
