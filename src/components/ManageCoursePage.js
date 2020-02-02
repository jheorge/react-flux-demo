import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi.js";
import { toast } from "react-toastify";

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

  const [errors, setErrors] = useState({});

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
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "AuthorId is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);
    //form is valid if the errors object does not have properties
    return Object.keys(_errors).length === 0;
  }

  return (
    <div>
      <h2>Manage course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default ManageCoursePage;
