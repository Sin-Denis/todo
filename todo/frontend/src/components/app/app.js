import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './app.css';

import Register from '../register';
import Login from '../login';
import Header from '../header';
import Dashboard from '../dashboard';
import Raiting from '../raiting';


export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/raiting" component={ Raiting } />
        </BrowserRouter>
      </div>
    )
  }

}
