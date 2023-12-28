import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signupNewUser = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
};

export const logInUser = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const fetchCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
