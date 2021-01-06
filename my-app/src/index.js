import React from 'react';
import ReactDOM from 'react-dom';
import "react-router-dom";
import App from './App';
import "antd/dist/antd.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './components/main.css';
// import './components/FA/css/all.min.css';

ReactDOM.render(

     <BrowserRouter>
         <App/>
     </BrowserRouter>,
document.getElementById('root')
);


reportWebVitals();