import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #d10404;
  }
`;
