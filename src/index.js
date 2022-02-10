import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const postData = [
  {
      "image": "https://static.onecms.io/wp-content/uploads/sites/9/2022/01/19/sweet-potato-cheesecake-empanadas-FT-RECIPE0222.jpg ",
      "name":"Sweet Potato Cheesecake Empanadas",
      "description": "dessert empanada ",
      "likes": 10,
      "tags": ["dessert","cheesecake"]
  },
  {
      "image": " https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=45&resize=768,574",
      "name":"Dum aloo",
      "description": "potatoes in a thick nut gravy",
      "likes": 0,
      "tags": ["Indian","Potatoes"]
  } 
]

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
    <App postData={postData} userData={userData}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
