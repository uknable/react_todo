import React, {Component} from 'react';

class TodoInput extends Component {
  render() {
    return (
      <form>
        <input type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

export default TodoInput;
