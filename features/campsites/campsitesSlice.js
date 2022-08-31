import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseURL";


export const fetchCampsites=createAsyncThunk(
    'campsites/fetchCampsites',
    async =()=>{
     const response =await fetch (baseUrl +"campsites") 
     return response.json()
    } 
)
const initialState = {
 isLoading:true,
 errorMess:null,
 campsitesArr:[]
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers:{
    [fetchCampsites.pending]:(state)=>{
        state.isLoading=true
    },
    [fetchCampsite.fulfilled]:(state,action)=>{
        state.isLoading=false;
        state.errorMess=null;
        state.campsitesArr=action.payload;
    },
    [fetchCampsites.rejected]:(state,action)=>{
        state.isLoading;
        state.errorMess=action.payload.error?action.payload.error:"rejected"
        
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;
