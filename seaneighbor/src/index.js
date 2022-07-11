import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const express = require("express");
// const mysql = require("mysql");
// const app = express();


// app.use(express.json());
// const db = mysql.createConnection({
//   user:"root",
//   host:"localhost",
//   password:"",
//   database:"seaneighbor",
// });
//  app.listen(3000, ()=>{
//   console.log('running serve');
//  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
