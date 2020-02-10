import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore.js";
import CoursesList from "./CoursesList.js";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(courseStore.getCourses());
  }, []);
  return (
    <div>
      <Link to="/course" className="btn btn-primary">
        Course Managment
      </Link>
      <CoursesList courses={courses} />
    </div>
  );
}

export default CoursesPage;
