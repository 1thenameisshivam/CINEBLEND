import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trending: null,
  },
  reducers: {
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
  },
});

export const { setTrending } = movieSlice.actions;
export default movieSlice.reducer;
