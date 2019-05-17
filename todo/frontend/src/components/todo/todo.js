import React, { Component } from 'react'

import './todo.css';

import TodoField from '../todo-field';

export default class Todo extends Component {

  state = {
    inputTask: '',
    tasks: []
  };

  getTasks = () => {

    fetch('http://localhost:8000/api/task-list/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "Authorization": "Token d743d13ff5564628f48302fc1a79e6a3f529f18b"
      }
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((body) => {
      console.log(body);
      this.setState(() => {
        return {
          tasks: [ ...body ]
        };
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  };

  createTask = () => {
    
    fetch('http://localhost:8000/api/task-create/', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": "Token d743d13ff5564628f48302fc1a79e6a3f529f18b"
      },
      body: JSON.stringify({
        name: this.state.inputTask,
        description: 'ывафв',
        difficult: 2
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err.message);
    });

  };

  onChangeTask = (event)  => {
    this.setState({ inputTask: event.target.value });
    console.log(this.state)
  };

  componentWillMount() {
    this.getTasks();
  };

  render() {  
    return (
      <div className="todo">
        <h3 className="todo-title">Todo App</h3>
        <ul className="list-group todo-list">
          {this.state.tasks.map(({ name }, id) => {return <TodoField key={ id } name={ name }/>})}
        </ul>
        <div className="todo-field">
          <label htmlFor="exampleInputTask"></label>
          <input
              type="text"
              className="form-control"
              id="todo-input"
              placeholder="Enter task"
              onChange={this.onChangeTask}
          >
          </input>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={ this.createTask }
          >Add</button>
        </div>
      </div>
    )
  }
}
