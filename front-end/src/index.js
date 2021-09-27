import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import ReactNotifications from "react-notifications-component";

ReactDOM.render(
  <React.StrictMode>
    <ReactNotifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
