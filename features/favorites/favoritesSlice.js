import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (favorites, action) => {
      if (favorites.includes(action.payload)) {
        return favorites.filter((campsite) => campsite != action.payload);
      } else {
        favorites.push(action.payload);
      }
    },
  },
});
