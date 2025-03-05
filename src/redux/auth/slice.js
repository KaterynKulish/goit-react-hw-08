import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoader: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoader = false;
      })
      .addCase(registerUserThunk.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoader = false;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoader = false;
      })
      .addCase(loginUserThunk.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoader = false;
      })
      .addCase(logoutUserThunk.fulfilled, () => initialState)
      .addCase(logoutUserThunk.pending, () => initialState)
      .addCase(logoutUserThunk.rejected, () => initialState)
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});
export const authReducer = slice.reducer;
