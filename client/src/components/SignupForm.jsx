import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import {
    Form,
    Button,
    Alert
} from 'react-bootstrap';
import Auth from '../utils/auth';

const SignupForm = () => { 
    // SETTING INITAL FORM STATE 
    const [userFormData, setUserFormData] = useState({
        username: "", email: "", password: "",
    });

    const[addUser, { error }] = useMutation(ADD_USER);
    // SET STATE FOR FORM VALIDATION
    const [validated] = useState(false);
    // SET STATE FOR ALERT 
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => { 
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // REACT BOOTSTRAP 
        // TODO: STILL NEED TO FINIHS AUTH TO USE TOKEN
    
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log("HELLO");
        try { 
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        setUserFormData({
            username: "",
            email: "",
            password: "",
        });
    };

    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='warning'>
                Sorry! Please check for errors
            </Alert>

            <Form.Group>

            </Form.Group>
        </Form>
        </> 

    );
};

export default SignupForm;