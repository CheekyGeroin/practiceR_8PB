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
    [signUpUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        token: action.payload.user.token,
        isLoggedIn: true,
      };
    },

    [signUpUser.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },

    [loginUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        token: action.payload.user.token,
        isLoggedIn: true,
      };
    },

    [loginUser.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },

    [refreshUser.pending]: (state, action) => {
      return {
        ...state,
        isRefreshing: true,
      };
    },

    [refreshUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user.name,
          email: action.payload.user.name,
        },
        token: action.payload.user.token,
        isRefreshing: false,
        isLoggedIn: true,
      };
    },

    [refreshUser.rejected]: (state, action) => {
      return {
        ...state,
        isRefreshing: false,
        error: action.payload.name,
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
    [logoutUser.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
