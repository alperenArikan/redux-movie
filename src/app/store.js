import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/counter/movieSlice";

export default configureStore({
  reducer: {
    movieReducer,
  },
});
