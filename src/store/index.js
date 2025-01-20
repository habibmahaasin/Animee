import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./slices/animeSlice";

const store = configureStore({
  reducer: {
    animeDatas: animeSlice,
  },
});

export default store;
