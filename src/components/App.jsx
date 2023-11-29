import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const loading = useSelector(selectIsLoading);
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {loading && <Loader />}
      <ContactList />
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
