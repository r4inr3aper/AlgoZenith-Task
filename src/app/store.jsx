import { configureStore } from "@reduxjs/toolkit";
import pageSlice  from "../Features/PageSlice";
export default configureStore({
  reducer: {
    page: pageSlice
  },
});