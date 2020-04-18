import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore.js";
import CoursesList from "./CoursesList.js";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions.js";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  useEffect(() => {
    courseStore.addChangeListenr(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    else return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <div>
      <Link to="/course" className="btn btn-primary">
        Course Managment
      </Link>
      <CoursesList courses={courses} onClick={deleteCourse} />
    </div>
  );
}

export default CoursesPage;
