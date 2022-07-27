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

    <button class="btn" type="link" onClick={login}>WHATS VALID?</button> 
  );

};


export default Home;




// make this into a const style 
{/* <style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 7px;
}
body {
background-image: url('image/bg-index.png');
background-size: center center;
background-size: 100% 165%;
background-repeat: no-repeat;
}
.signin{
margin-top: 15em;
}
.signin,.signup{
text-align: center;
position: relative;
top: 10em;
font-size: 23px;
}
</style>
</head> */}
