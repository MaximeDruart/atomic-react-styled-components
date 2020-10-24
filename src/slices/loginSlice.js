import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload
      state[field] = value
    },
    clearFields: (state) => {
      for (const key in state) state[key] = ""
    },
  },
})
