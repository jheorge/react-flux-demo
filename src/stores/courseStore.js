import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher.js";
const CHANGE_EVENT = "change";

class CourseStore extends addEventListener {
  addChangeListenr(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const CourseStore = new CourseStore();
Dispatcher.register(action => {
  switch (action.actionType) {
    case value:
      break;

    default:
      break;
  }
});
