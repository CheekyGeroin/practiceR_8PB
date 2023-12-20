import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Outlet } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <Outlet />
    </>
  );
};

export default RegisterPage;
