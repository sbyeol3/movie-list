import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../components/Main'
import Upcoming from '../components/Upcoming'
import User from "../components/User";

export default () => (
  <Router>
    <Route exact path="/" component={Main}/>
    <Route exact path="/movies" component={Upcoming}/>
    <Route exact path="/user" component={User}/>
  </Router>
)
