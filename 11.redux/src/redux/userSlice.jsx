import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // We use reducers when there’s no HTTP request.
    // When there is an HTTP request, we use extraReducers.It takes builder function as its parameter
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// export const {} = userSlice.actions;  // just for reducers
export default userSlice.reducer;
