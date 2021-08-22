import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Searchpage from './components/Searchpage';

ReactDOM.render(
  <Router>
  <Route exact path="/">
    <Homepage/>
  </Route>

  <Route path="/search">
    <Searchpage/>
  </Route>
  

  </Router>,
  document.getElementById('root')
);


