import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

// <Prompt when={true} message="Are you sure you want to leave?" />
// {props.match.params.slug}
function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    }; //computed property in javascript []
    setCourse(updatedCourse);
  }
  //other option for do the same of above
  // function handleChange({ target }) {
  //   setCourse({
  //     ...course,
  //     [target.name]: target.value
  //   });
  // }

  return (
    <div>
      <h2>Manage course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </div>
  );
}

export default ManageCoursePage;
