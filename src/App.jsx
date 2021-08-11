import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Posts from './Components/Posts'
import Header from './Components/Header/Header'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/contacts">
          <h1>Contacts</h1>
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

