/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const TOKEN_NAME = 'TOKEN';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: !!localStorage.getItem(TOKEN_NAME),
  },
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem(TOKEN_NAME, payload);
      state.isAuth = true;
    },
    logout: (state) => {
      localStorage.removeItem(TOKEN_NAME);
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;

export const {
  login,
  logout,
} = authSlice.actions;
