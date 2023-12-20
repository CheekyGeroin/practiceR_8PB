import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  signupNewUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} from 'API/user-api';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ' ';
  },
};

export const signUpUser = createAsyncThunk(
  'user/signup',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const newUser = await signupNewUser(name, email, password);
      token.set(newUser.token);
      toast.success(`New user with name ${name} has created!`);
      return newUser;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await logInUser(email, password);
      token.set(user.token);
      toast.success(`Hello!:)`);
      return user;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const lastUser = await logOutUser();
      token.unset();
      toast.success(`Have a nice day:)`);
      return lastUser;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const currentUser = await fetchCurrentUser();
      return currentUser;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);
