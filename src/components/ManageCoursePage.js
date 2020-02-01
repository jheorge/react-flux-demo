import React from "react";
import { Prompt } from "react-router-dom";
function ManageCoursePage(props) {
  return (
    <div>
      <h2>Manage course</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      {props.match.params.slug}
    </div>
  );
}

export default ManageCoursePage;
