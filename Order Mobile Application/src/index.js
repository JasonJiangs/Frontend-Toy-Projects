import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

// 750 rem
document.documentElement.style.fontsize = 100/750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);