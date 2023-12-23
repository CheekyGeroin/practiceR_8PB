import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations/authOperations';
import { selectEmail } from 'redux/selectors/selectors';
import { Button, Container, Text } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  return (
    <Container>
      <Text>Welcome, {email}</Text>
      <Button
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Log out
      </Button>
    </Container>
  );
};
export default UserMenu;
