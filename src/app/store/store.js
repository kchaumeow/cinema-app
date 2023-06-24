import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice";
export default configureStore({
  reducer: {
    filmsReducer
  }
})