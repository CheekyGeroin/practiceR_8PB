import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-right: 15px;
`;

export const Button = styled.button`
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 2px 2px 10px 0 rgba(151, 152, 153, 0.5);
  }
`;
