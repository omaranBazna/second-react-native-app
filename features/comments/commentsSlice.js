import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseURL";


export const fetchComments=createAsyncThunk(
    'campsites/fetchComments',
    async =()=>{
     const response =await fetch (baseUrl +"campsites") 
     return response.json()
    } 
)
const initialState = {
 isLoading:true,
 errorMess:null,
 commentsArr:[]
};

const campsitesSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers:{
    [fetchCampsites.pending]:(state)=>{
        state.isLoading=true
    },
    [fetchCampsite.fulfilled]:(state,action)=>{
        state.isLoading=false;
        state.errorMess=null;
        state.commentsArr=action.payload;
    },
    [fetchCampsites.rejected]:(state,action)=>{
        state.isLoading;
        state.errorMess=action.error?action.error.message:"rejected"
        
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;
