import React from 'react';
import '../Resources/Styles/App.css';
import { Switch, Route, withRouter} from "react-router-dom";
import Home from './Home'
import Contacts from './Contacts'
import Posts from './Posts'

function App() {
  return (
    <div className="centerColumnContent">
      <Switch>
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

