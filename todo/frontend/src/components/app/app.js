import React, { Component } from 'react';
import './app.css';

import Register from '../register';
import Login from '../login';
import Header from '../header';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
        </BrowserRouter>
      </div>
    )
  }
}
