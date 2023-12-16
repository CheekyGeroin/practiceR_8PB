import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  signupNewUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} from 'API/user-api';

export const signUpUser = createAsyncThunk(
  'user/signup',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const newUser = await signupNewUser(name, email, password);
      toast.success(`New user with name ${name} has created!`);
      return newUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await logInUser(email, password);
      toast.success(`Hello!:)`);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const lastUser = await logOutUser();
      toast.success(`Have a nice day:)`);
      return lastUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const currentUser = await fetchCurrentUser();
      return currentUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
