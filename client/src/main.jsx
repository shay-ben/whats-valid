import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import image from "./images/BACKGROUND.png"; 

function Component() {
  return (
    <div style={{ backgroundImage:`url(${image})` }}>
      Hello World
    </div>
  );
}

export { Component };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
