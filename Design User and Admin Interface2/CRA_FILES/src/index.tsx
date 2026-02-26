/**
 * Entry point cho Create React App
 * File này khởi tạo React application
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/fonts.css';
import './styles/theme.css';
import App from './App';

// Tạo root element và render app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
