import { Container, Item, Link, List } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to={'/register'}>Sign Up</Link>
        </Item>
        <Item>
          <Link to={'/login'}>Log In</Link>
        </Item>
      </List>
    </Container>
  );
};
export default AuthNav;
