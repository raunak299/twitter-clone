import { configureStore } from "@reduxjs/toolkit";
import PostSliceReducer from "./PostSlice";
import BookmarkSliceReducer from "./BookmarkSlice";

const store = configureStore({
  reducer: { PostSliceReducer, BookmarkSliceReducer },
});

export default store;
