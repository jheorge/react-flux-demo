import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CoursesList.js";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);
  return <CoursesList courses={courses} />;
}

export default CoursesPage;
