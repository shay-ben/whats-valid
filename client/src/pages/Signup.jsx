// import { useState, useEffect } from 'react';
// import { useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
// import { ADD_USER } from '../utils/mutations';
// import { Container, ErrorText } from '../components/styled-components';

// export const SignUp = () => {
//   // best practice would be to use formik and yup for validation but keeping it simple
//   const [errors, setErrors] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [mutate, result] = useMutation(ADD_USER, { errorPolicy: 'all' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (result.called && result.data?.addUser?.token && !result.loading) {
//       localStorage.setItem('id_token', result.data.token)
//       navigate('/', { replace: true });
//     }
//     if (result.error) {
//       setErrors('check the console for errors');
//       console.error(result.error);
//     }
//   }, [result.called, result.data?.addUser?.token, result.loading, result.error])

//   // Use currying to reuse the functionality across all form elements
//   const updateData = mode => event => { 
//     if (errors) {
//       setErrors('')
//     }
//     switch(mode) {
//       case 'username':
//         setUsername(event.target.value);
//         break;
//       case 'email':
//         setEmail(event.target.value);
//         break;
//       case 'password':
//         setPassword(event.target.value);
//         break;
//       case 'confirm-password':
//         setConfirmPassword(event.target.value);
//         break;
//       default:
//         console.error('something went wrong');
//     }
//   }

//   const setErrorState = (error) => {
//     if(!errors) {
//       setErrors(error);
//       return;
//     }
//     setErrors(pError => `${pError} ${error}`);
//   }

//   const onSubmit = () => {
//     // Perform some basic validation before submitting the data
//     // Make sure that all the fields are filled
//     if (!username || !email || !password || !confirmPassword) {
//       setErrorState('All fields are required');
//       return;
//     }

//     // Check if the confirmed password is equal to the actual password
//     if (password !== confirmPassword) {
//       setErrorState('password and confirmPassword fields should be equal');
//       return;
//     }
//     mutate({
//       variables: { username, email, password }
//     });
//   }

//   return (
//     <Container>
//       <label htmlFor='username'>UserName:</label>
//       <input onChange={updateData('username')} value={username} id='username' type='text' required/>
//       <label htmlFor='email'>Email:</label>
//       <input onChange={updateData('email')}  value={email} id='email' type='email' required/>
//       <label htmlFor='password'>Password:</label>
//       <input onChange={updateData('password')} value={password} id='password' type='password' required/>
//       <label htmlFor='confirm-password'>Confirm Password:</label>
//       <input onChange={updateData('confirm-password')} value={confirmPassword} id='confirm-password' type='password' required/>
//       { errors ? <ErrorText>{errors}</ErrorText> : null}
//       <div id='controls'>
//         <input onClick={onSubmit} type='submit'/>
//         <a onClick={() => navigate('/login')}>LogIn</a>
//       </div>
//     </Container>
//   )
// }