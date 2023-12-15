import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signupNewUser = async ({ name, password, email }) => {
  const newUser = { name, email, password };
  const { data } = await axios.post('/users/signup', newUser);
  return data;
};

export const logInUser = async ({ email, password }) => {
  const user = { email, password };
  const { data } = await axios.post('/users/login', user);
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
