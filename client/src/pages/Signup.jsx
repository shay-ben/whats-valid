import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ccc;
  display: grid;
  padding: 20px;
  place-items: flex-start;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 20px 20px 20px;
  row-gap: 10px;
  text-align: left;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
  label {
    margin-right: 10px;
    grid-column-start: 1;
  }
  input {
    height: fit-content;
    width: 300px;
  }
  input[type='submit'] {
    grid-column-start: 2;
    background-color: green;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
  }
`;
export const SignUp = () => {
  return (
    <Container>
      <label htmlFor='username'>UserName:</label>
      <input id='username' type='text' />
      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' />
      <label htmlFor='password'>Password:</label>
      <input id='password' type='password' />
      <label htmlFor='confirm-password'>Confirm Password:</label>
      <input id='confirm-password' type='password' />
      <input type='submit'/>
    </Container>
  )
}