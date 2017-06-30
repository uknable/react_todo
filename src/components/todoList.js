import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  createTaskRow(task, index) {
    return (<h3 key={index}>{task}</h3>);
  }
  render() {
    return (
      <h3>
        {this.props.taskList.map((task, index) => this.createTaskRow(task, index))}
      </h3>
    );
  }
}

TodoList.propTypes = {
  taskList: PropTypes.array
};

export default TodoList;
