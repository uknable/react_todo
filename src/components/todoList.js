import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  createTaskRow(task, index) {
    return (
      <li className="list-group-item" key={index}>
        {task}
        <button className="btn task-item-remove" value={index} onClick={this.props.onClick}>X</button>
      </li>
    );
  }
  render() {
    return (
      <div className="todo-list-container">
        <ul className="list-group">
          {this.props.taskList.map((task, index) => this.createTaskRow(task, index))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  taskList: PropTypes.array
};

export default TodoList;
