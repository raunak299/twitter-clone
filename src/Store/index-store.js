import { configureStore } from "@reduxjs/toolkit";
import PostSliceReducer from "./PostSlice";
import BookmarkSliceReduder from "./BookmarkSlice";

const store = configureStore({
  reducer: { PostSliceReducer, BookmarkSliceReduder },
});

export default store;
