import React from 'react';
import '../images/valid.png'

const Home = () => {
  
  function signUp() {
    alert('Hello, World!');
  }
  
  return (

    <button onClick={signUp}>CLICK ME</button> 
  );


};

export default Home;