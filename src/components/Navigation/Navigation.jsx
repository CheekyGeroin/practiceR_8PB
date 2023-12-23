import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors/selectors';
import { Item, List, Nav, Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <List>
        <Item>
          <Link to={'/'}>Home</Link>
        </Item>
        {isLoggedIn && (
          <Item>
            <Link to={'/contacts'}>Contacts</Link>
          </Item>
        )}
      </List>
    </Nav>
  );
};
export default Navigation;
