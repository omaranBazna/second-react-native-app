import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseURL";


export const fetchCampsite=createAsyncThunk(
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
    [fetchCampsite.pending]:(state)=>{
        state.isLoading=true
    },
    [fetchCampsite.fulfilled]:(state,action)=>{
        state.isLoading=false;
        state.errorMess=null;
        state.campsitesArr=action.payload;
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;
