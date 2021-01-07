import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import "antd/dist/antd.css";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import './components/main/main.css'
ReactDOM.render(
    <React.StrictMode>
    <Login />
  </React.StrictMode>,
document.getElementById('root')
);


reportWebVitals();