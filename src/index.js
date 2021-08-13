import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/Styles/index.css';
import App from './Components/App';
import Header from './Components/Header'
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

