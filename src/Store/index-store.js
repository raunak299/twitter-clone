import { configureStore } from "@reduxjs/toolkit";
import PostSliceReducer from "./PostSlice";

const store = configureStore({
  reducer: { PostSliceReducer },
});

export default store;
