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
      taskInput: '',
      taskList: TodoStore.getTaskList()
    }
    this.onTaskInput = this.onTaskInput.bind(this);
  }
  onTaskInput(event) {
    let taskInput = event.target.value;
    this.setState({taskInput: taskInput});
  }
  render() {
    return (
      <div className="jumbotron">
        <TodoHeader />
        <TodoInput taskInput={this.state.taskInput}
                   onChange={this.onTaskInput}/>
        <TodoList taskList={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
