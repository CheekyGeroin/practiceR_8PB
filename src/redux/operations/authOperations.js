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
  async (data, { rejectWithValue }) => {
    try {
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const response = await signupNewUser(newUser);
      token.set(response.token);
      toast.success(`New user with name ${data.name} has created!`);
      return response;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = { email: data.email, password: data.password };
      const response = await logInUser(user);
      token.set(response.token);
      toast.success(`Hello!:)`);
      return response;
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
