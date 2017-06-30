import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  createTaskRow(task, index) {
    return (
      <div key={index}>
        <h3>{task}</h3>
        <button value={index} onClick={this.props.onClick}>Remove</button>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.taskList.map((task, index) => this.createTaskRow(task, index))}
      </div>

    );
  }
}

TodoList.propTypes = {
  taskList: PropTypes.array
};

export default TodoList;
