import React from 'react';

function TodoInput(props) {
  return (
    <div className="todo-input-container">
      <form onSubmit={props.onSubmit}>
        <input type="text"
               value={props.taskInput}
               onChange={props.onChange}/>

        <input type="submit"
               value="Add"
               className='btn btn-default'/>
      </form>
    </div>
  );
};

export default TodoInput;
