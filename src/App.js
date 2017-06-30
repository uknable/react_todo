import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/todoHeader.js';
import TodoInput from './components/todoInput.js';
import TodoList from './components/todoList.js';
import TodoStore from './stores/todoStore.js';
//import TodoActions from './actions/todoActions.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: TodoStore.getTaskList()
    }
  }
  render() {
    return (
      <div className="jumbotron">
        <TodoHeader />
        <TodoInput />
        <TodoList taskList={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
