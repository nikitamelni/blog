import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>

    </>
  );
}

export default App;

