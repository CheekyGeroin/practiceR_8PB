import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUser,
  loginUser,
  logoutUser,
  refreshUser,
} from 'redux/operations/authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
    error: null,
  },

  extraReducers: {
    [signUpUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.user.name,
          email: payload.user.email,
        },
        token: payload.user.token,
        isLoggedIn: true,
      };
    },

    [signUpUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.name,
      };
    },

    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.user.name,
          email: payload.user.email,
        },
        token: payload.user.token,
        isLoggedIn: true,
      };
    },

    [loginUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.name,
      };
    },

    [refreshUser.pending]: (state, action) => {
      return {
        ...state,
        isRefreshing: true,
      };
    },

    [refreshUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.user.name,
          email: payload.user.name,
        },
        token: payload.user.token,
        isRefreshing: false,
        isLoggedIn: true,
      };
    },

    [refreshUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        isRefreshing: false,
        error: payload.name,
      };
    },

    [logoutUser.fulfilled]: state => {
      return {
        ...state,
        user: {
          ...state.user,
          name: '',
          email: '',
        },
        token: null,
        isLoggedIn: false,
      };
    },
    [logoutUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.name,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
