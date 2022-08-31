import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseURL";


export const fetchComments=createAsyncThunk(
    'comments/fetchComments',
    async =()=>{
     const response =await fetch (baseUrl +"comments") 
     return response.json()
    } 
)
const initialState = {
 isLoading:true,
 errorMess:null,
 commentsArr:[]
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers:{
    [fetchComments.pending]:(state)=>{
        state.isLoading=true
    },
    [fetchComments.fulfilled]:(state,action)=>{
        state.isLoading=false;
        state.errorMess=null;
        state.commentsArr=action.payload;
    },
    [fetchComments.rejected]:(state,action)=>{
        state.isLoading;
        state.errorMess=action.error?action.error.message:"rejected"
        
    }
  }
});

export const commentsReducer = commentsSlice.reducer;
