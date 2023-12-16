import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUser,
  loginUser,
  logoutUser,
  refreshUser,
} from 'redux/operations/authOperations';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    isLoggedIn: false,
  },

  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      return {
        ...state,
      };
    },
  },
});
