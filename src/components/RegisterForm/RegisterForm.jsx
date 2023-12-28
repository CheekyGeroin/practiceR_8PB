import { useDispatch } from 'react-redux';
import { Button, Form, Input, Label } from './RegisterForm.styled';
import { useState } from 'react';
import { signUpUser } from 'redux/operations/authOperations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch(signUpUser({ name, email, password }));
    reset();
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  return (
    <Form onSubmit={submitForm}>
      <Label>
        Name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        Email
        <Input type="text" name="email" value={email} onChange={handleChange} />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Sign Up!</Button>
    </Form>
  );
};

export default RegisterForm;
