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
  campsites: [],
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
});

export const campsitesReducer = campsitesSlice.reducer;
