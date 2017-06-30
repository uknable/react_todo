import React from 'react';

function TodoInput(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text"
             value={props.taskInput}
             onChange={props.onChange}/>

      <input type="submit"
             value="Add"
             className='btn btn-default'/>
    </form>
  );
};

export default TodoInput;
