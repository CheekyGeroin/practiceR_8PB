import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations/authOperations';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  const Contacts = lazy(() => import('../pages/ContactsPage'));
  const Register = lazy(() => import('../pages/RegisterPage'));
  const Login = lazy(() => import('../pages/LoginPage'));

  return (
    !isRefreshing && (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/register"
              element={<PublicRoute restricted component={<Register />} />}
            />
            <Route
              path="/login"
              element={<PublicRoute restricted component={<Login />} />}
            />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </Container>
    )
  );
};

export default App;
