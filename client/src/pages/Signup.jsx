import { Container } from '../components/Container';
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