import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CoursesList.js";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
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
