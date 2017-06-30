import React from 'react';

function TodoInput(props) {
  return (
    <form>
      <input type="text"
             value={props.taskInput}
             onChange={props.onChange}/>
      <button>Add</button>
    </form>
  );
}

export default TodoInput;
