import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './components/main.css';


ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
         <App/>
     </BrowserRouter>
  </Provider>,
document.getElementById('root')
);


reportWebVitals();