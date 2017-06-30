import Dispatcher from '../dispatcher/todoDispatcher.js';
import ActionTypes from '../constants/actionTypes.js';

const TodoActions = {
  createTask(task) {
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_TASK,
      newTask: task
    });
  },
  removeTask(index) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_TASK,
      taskIndex: index
    });
  }
};

export default TodoActions;
