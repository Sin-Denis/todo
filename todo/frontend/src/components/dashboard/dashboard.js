import React, {Component} from 'react';

import './dashboard.css';

import Todo from '../todo';

export default class Dashboard extends Component {

  render() {
    console.log(this.props.match.params.token);
    return (
      <Todo token={ this.props.match.params.token }/>
    )
  }
  
}