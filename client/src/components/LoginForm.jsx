import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      // console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form> 
  );
};

// <style>
//     * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         color: white;
//         font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
//         font-style: italic;
//         letter-spacing: 2px;
//     }

//     body {
//         background-image: url('image/BACKGROUND.png');
//         background-size: center center;
//         background-size: 100% 165%;
//         background-repeat: no-repeat;
//     }

//     form {
//         border-radius: 50px;
//         width: 40%;
//         padding: 1.4em 2.5em;
//         margin: auto;
//         background-color: #fb7975;
//         position: relative;
//         top: 5em;

//     }

//     form>div>label {
//         color: white !important;
//     }

//     form>div>input {
//         width: 100%;
//         border: none;
//         padding: 5px;
//         margin: 12px auto;
//     }

//     input#btn-submit {
//         color: #dd4b46;
//         font-size: 15px;
//         width: 30%;
//         display: block;
//         border-radius: 50px;
//         padding: 15px;
//         margin: 5px auto 10px;
//     }
// </style>

// <body>
//     <div class="form-container">
//         <form action="" method="post">
//             <div class="email-container">
//                 <label for="">Email</label><br>
//                 <input type="email" name="email" id="email">
//             </div>
//             <div class="username-container">
//                 <label for="">User</label><br>
//                 <input type="text" name="username" id="username">
//             </div>
//             <div class="password-container">
//                 <label for="">Password</label><br>
//                 <input type="password" name="password" id="password">
//             </div>
//             <div class="con-password-container">

//                 <label for="">Confirm Password</label><br>
//                 <input type="password" name="confirmpassword" id="confirmpassword">
//             </div>
//             <div class="submit-container">
//                 <input type="submit" value="Submit" name="btn-submit" id="btn-submit">
//             </div>
//             <p style="text-align: center;font-size: 14px;">ALREADY VALID? SIGN IN HERE!</p>
//         </form>
//     </div>
// </body>

// </html>

export default LoginForm;
