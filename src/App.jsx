import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Posts from './Components/Posts'

function App() {
  console.log("App is loaded");

  return (
    <Switch>
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default withRouter(App);

