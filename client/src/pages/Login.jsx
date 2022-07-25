import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import { Container, ErrorText } from '../components/styled-components';

export const Login = () => {
  const [errors, setErrors] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mutate, result] = useMutation(LOGIN_USER, { errorPolicy: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (result.called && result.data?.login?.token && !result.loading) {
      localStorage.setItem('id_token', result.data?.login?.token);
      navigate('/', { replace: true });
    }
  }, [result.called, result.loading, result.data])

  const updateData = mode => event => {
    if (errors) {
      setErrors('')
    }
    switch(mode) {
      case 'email':
        setEmail(event.target.value);
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
    if (!email || !password) {
      setErrorState('All fields are required');
      return;
    }
    mutate({ variables: { email, password } });
  }
  return (
    <Container>
      <label htmlFor='email'>User Name:</label>
      <input value={email} onChange={updateData('email')} id='email' type='email' required/>
      <label htmlFor='password'>Password:</label>
      <input value={password} onChange={updateData('password')} id='password' type='password' required/>
      { errors ? <ErrorText>{errors}</ErrorText> : null}
      <input onClick={onSubmit} type='submit'/>
    </Container>
  )
}