import dispatcher from "../appDispatcher.js";
import * as courseApi from "../api/courseApi.js";
import actionTypes from "./actionsTypes.js";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // hey dispatcher , go tell all the stores that course was just created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}
