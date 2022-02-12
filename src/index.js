import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';


const userData = [
  {
    "name": "Urna Semper",
    "posts": [1,2,3],
    "followers": 50,
    "following": 20
  },
  {
    "name": "Not Urna Semper",
    "posts": [1,2,3],
    "followers": 30,
    "following": 10
  }
]

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App userData={userData}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
