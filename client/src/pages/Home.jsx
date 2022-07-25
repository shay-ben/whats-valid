import React from 'react';
import '../images/valid.png'
import { Button } from 'antd';


const Home = () => {
  
  function homepage() {
    alert('Hello, World!');
  }
  
  return (
    <div className="signButton">
    <Button type="link">Sign In</Button>
    <Button type="link">Sign Up</Button>
  </div>
  )
};

export default Home;