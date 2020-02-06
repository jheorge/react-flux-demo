import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher.js";
import actionsType from "../actions/actionsTypes.js";

const CHANGE_EVENT = "change";
let _courses = [];

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

  getCourses(slug) {
    return _courses;
  }
  getCourseBySlug() {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionsType.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;

    default:
      break;
  }
});
