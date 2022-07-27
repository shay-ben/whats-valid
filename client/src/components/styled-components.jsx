import styled from '@emotion/styled';
import  Login  from './pages/loginform';

const Container = styled.div`
  background-color: #ccc;
  display: grid;
  padding: 20px;
  place-items: flex-start;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 20px 20px 20px;
  row-gap: 10px;
  text-align: center;

  border-radius: 5px;
  label {
    margin-right: 10px;
    grid-column-start: 1;
  }
  input {
    height: fit-content;
    width: 300px;
    padding: 3px;
  }
  input[type='submit'] {
    grid-column-start: 2;
    background-color: green;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    margin-right: 15px;
  }
  span {
    grid-column-start: 2;
  }
  #controls {
    cursor: pointer;
    text-decoration: underline;
    grid-column-start: 2;
  }
`;

const ErrorText = styled.span`
  color: red;
  text-overflow: ellipsis;
`;

export {
  Container,
  ErrorText
}