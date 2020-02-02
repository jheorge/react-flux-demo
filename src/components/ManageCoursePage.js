import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi.js";

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

  function handleSubmit(event) {
    event.preventDefault(); //this will prevent theh page from posting back to the server
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  }

  return (
    <div>
      <h2>Manage course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ManageCoursePage;
