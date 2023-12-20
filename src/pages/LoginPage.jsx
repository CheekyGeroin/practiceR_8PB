import LoginForm from 'components/LoginForm/LoginForm';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Outlet />
    </>
  );
};

export default LoginPage;
