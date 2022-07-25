import { useState } from 'react';
import { Container, ErrorText } from '../components/styled-components';

export const SignUp = () => {
  const [errors, setErrors] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Use currying to reuse the functionality across all form elements
  const updateData = mode => event => {
    if (errors) {
      setErrors('')
    }
    switch(mode) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'confirm-password':
        setConfirmPassword(event.target.value);
        break;
      default:
        console.error('something went wrong');
    }
  }

  const setErrorState = (error) => {
    if(!errors) {
      setErrors(error);
      return;
    }
    setErrors(pError => `${pError} ${error}`);
  }

  const onSubmit = () => {
    // Make sure that all the fields are filled
    if (!username || !email || !password || !confirmPassword) {
      setErrorState('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrorState('password and confirmPassword fields should be equal');
      return;
    }

    console.log('inputs now ready for submission');
  }

  return (
    <Container>
      <label htmlFor='username'>UserName:</label>
      <input onChange={updateData('username')} value={username} id='username' type='text' required/>
      <label htmlFor='email'>Email:</label>
      <input onChange={updateData('email')}  value={email} id='email' type='email' required/>
      <label htmlFor='password'>Password:</label>
      <input onChange={updateData('password')} value={password} id='password' type='password' required/>
      <label htmlFor='confirm-password'>Confirm Password:</label>
      <input onChange={updateData('confirm-password')} value={confirmPassword} id='confirm-password' type='password' required/>
      { errors ? <ErrorText>{errors}</ErrorText> : null}
      <input onClick={onSubmit} type='submit'/>
    </Container>
  )
}