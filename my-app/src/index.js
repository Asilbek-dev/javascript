import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
//import './components/main/main.css'
import './App'
import Tabled from './table/Tabled';
ReactDOM.render(
    <React.StrictMode>
    <Tabled/>
  </React.StrictMode>,
document.getElementById('root')
);


reportWebVitals();