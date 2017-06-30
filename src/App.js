import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/todoHeader.js';
import TodoInput from './components/todoInput.js';
import TodoList from './components/todoList.js';
import TodoStore from './stores/todoStore.js';
import TodoActions from './actions/todoActions.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: '',
      taskList: TodoStore.getTaskList()
    }
    this._onChange = this._onChange.bind(this);
    this.onTaskInput = this.onTaskInput.bind(this);
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  componentWillMount() {
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState({taskList: TodoStore.getTaskList()});
  }
  onTaskInput(event) {
    let taskInput = event.target.value;
    this.setState({taskInput: taskInput});
  }
  createTask(event) {
    event.preventDefault();
    TodoActions.createTask(this.state.taskInput);
    this.setState({taskInput: ''});
  }
  removeTask(event) {
    event.preventDefault();
    TodoActions.removeTask(event.target.value);
  }
  render() {
    return (
      <div className="jumbotron">
        <TodoHeader />

        <TodoInput taskInput={this.state.taskInput}
                   onChange={this.onTaskInput}
                   onSubmit={this.createTask} />

        <TodoList taskList={this.state.taskList}
                  onClick={this.removeTask} />
      </div>
    );
  }
}

export default App;
