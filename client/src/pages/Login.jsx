import { useState } from 'react';
import { Container, ErrorText } from '../components/styled-components';

export const Login = () => {
  const [errors, setErrors] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateData = mode => event => {
    if (errors) {
      setErrors('')
    }
    switch(mode) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.error('something went wrong');
    }
  }

  const onSubmit = () => {
    // Validate on submit
    if (!username || !password) {
      setErrorState('All fields are required');
      return;
    }
  }
  return (
    <Container>
      <label htmlFor='username'>User Name:</label>
      <input value={username} onChange={updateData('username')} id='username' type='text' required/>
      <label htmlFor='password'>Password:</label>
      <input value={password} onChange={updateData('password')} id='password' type='password' required/>
      { errors ? <ErrorText>{errors}</ErrorText> : null}
      <input onClick={onSubmit} type='submit'/>
    </Container>
  )
}