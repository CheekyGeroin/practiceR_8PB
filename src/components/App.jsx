import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';

export const App = () => {
  const Contacts = lazy(() => import('../pages/ContactsPage'));
  const Register = lazy(() => import('../pages/RegisterPage'));
  const Login = lazy(() => import('../pages/LoginPage'));

  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      ;
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
