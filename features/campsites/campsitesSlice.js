import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseURL";


export fetchCampsite=createAsyncThunk({
    'campsites/fetchCampsites',
    async =()=>{
     const response =await fetch (baseUrl +"campsites") 
    } 
})
const initialState = {
  campsites: [],
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
});

export const campsitesReducer = campsitesSlice.reducer;
