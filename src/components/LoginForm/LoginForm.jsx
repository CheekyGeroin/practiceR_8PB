import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form, Label, Input, Button } from './LoginForm.styled';
import { loginUser } from 'redux/operations/authOperations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const submitForm = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    reset();
  };

  return (
    <Form onSubmit={submitForm}>
      <Label>
        <Input type="text" name="email" value={email} onChange={handleChange} />
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Log In!</Button>
    </Form>
  );
};

export default LoginForm;
