import {createSlice} from "@reduxjs/toolkit";
import {getFilms} from "../utils";
const filmsSlice = createSlice({
  name: 'films',
  initialState:{
    films: []
  },
  reducers: {
    filterFilms(state, action) {
      state.films.filter
    }
  }
})

export const {filterFilms} = filmsSlice.actions;

export default filmsSlice.reducer;