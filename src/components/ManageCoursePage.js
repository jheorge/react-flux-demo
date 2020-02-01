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

  function handleTitleChange(event) {
    const updatedCourse = { ...course, title: event.target.value };
    setCourse(updatedCourse);
  }

  return (
    <div>
      <h2>Manage course</h2>
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </div>
  );
}

export default ManageCoursePage;
