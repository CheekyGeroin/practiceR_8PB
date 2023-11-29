import axios from 'axios';

axios.defaults.baseURL = 'https://65589e31e93ca47020a98622.mockapi.io';

export const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addNewContact = async (name, number) => {
  const newContact = { name, phone: number };
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
