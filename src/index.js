import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from 'react-redux'
import {store} from './component/Services/Store'
import axios from 'axios';


axios.interceptors.request.use(function (config) {
  const token =  localStorage.getItem('auth')
  config.headers.auth =  token;

  return config;
});

ReactDOM.render(
  
  <Provider store = {store}>
  <App />
  </Provider>
 ,
  document.getElementById("root")
);