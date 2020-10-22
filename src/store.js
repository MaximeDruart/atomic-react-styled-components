import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/sliceName"

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
