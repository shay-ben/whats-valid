import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../images/valid.png'
import { Button } from 'antd';


const Home = () => {
  const navigate = useNavigate();

  function login() {
    localStorage.removeItem('id_token');
    navigate('/login', { replace: true });
  }
  return (

    <button onClick={login}>WHATS VALID?</button> 
  );


};

export default Home;