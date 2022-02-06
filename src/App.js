import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Posts from './Components/Posts';

function App({postData}) {
  return (
    <div className="App"> App
      <Header />
      <Posts postData={postData}/>
    </div>
  );
}

export default App;
