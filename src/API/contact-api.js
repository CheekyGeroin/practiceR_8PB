import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addNewContact = async (name, number) => {
  const newContact = { name, number };
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
