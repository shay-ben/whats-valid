import { Container } from '../components/Container';

export const Login = () => {
  return (
    <Container>
      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' />
      <label htmlFor='password'>Password:</label>
      <input id='password' type='password' />
      <input type='submit'/>
    </Container>
  )
}