import React from "react";

function ManageCoursePage(props) {
  return (
    <div>
      <h2>Manage course</h2>

      {props.match.params.slug}
    </div>
  );
}

export default ManageCoursePage;
