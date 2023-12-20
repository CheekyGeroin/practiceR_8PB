import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  padding: 20px 35px;
  border: 1px solid #9e9b9b;
  box-shadow: 2px 2px 20px 0px rgba(151, 152, 153, 0.5);
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 1.3;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #9e9b9b;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  line-height: 1.3;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #fff;
    background-color: #fc9803;
    box-shadow: 2px 2px 10px 0px rgba(151, 152, 153, 0.5);
  }
`;
