import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "api/auth/signup",
  async (registerCredential) => {
    const request = await axios.post(
      `
https://slim-mom-backend-c3173ac7e4c4.herokuapp.com/api/auth/signup`,
      registerCredential
    );
    const response = await request.data.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        (state.user = null), (state.error = null);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          (state.error = null);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.loading = false),
          (state.user = null),
          console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Acces denied! Invalid credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
