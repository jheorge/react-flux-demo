import { EventEmitter } from "events";
import dispatcher from "../appDispatcher.js";
import actionsType from "../actions/actionsTypes.js";
import actionsTypes from "../actions/actionsTypes.js";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
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
  getCourseBySlug(slug) {
    return _courses.find(course => {
      course.slug === slug;
    });
  }
}

const store = new CourseStore();

dispatcher.register(action => {
  switch (action.actionType) {
    case actionsTypes.DELETE_COURSE:
      _courses = _courses.filter(
        course => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionsType.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionsTypes.UPDATE_COURSE:
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    case actionsType.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;
