import {configureStore} from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import userSlice from "./userSlice";

export default configureStore({
   reducer: {
       posts: postsSlice,
       user: userSlice
   }
});