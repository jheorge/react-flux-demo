import React from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

// <Prompt when={true} message="Are you sure you want to leave?" />
// {props.match.params.slug}
function ManageCoursePage(props) {
  return (
    <div>
      <h2>Manage course</h2>
      <CourseForm />
    </div>
  );
}

export default ManageCoursePage;
