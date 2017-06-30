import Dispatcher from '../dispatcher/todoDispatcher.js';
import {EventEmitter} from 'events';
import ActionTypes from '../constants/actionTypes.js';
const CHANGE_EVENT = 'change';

let _taskList = [];

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = Dispatcher.register(this.dispatcherCallback.bind(this));
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getTaskList() {
    return _taskList;
  }
  dispatcherCallback(action) {
    switch (action.actionType) {
      case ActionTypes.CREATE_TASK:
        _taskList.push(action.newTask);
        this.emitChange();
        break;
      default:
    }
  }
}

export default new TodoStore();
