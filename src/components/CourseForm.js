import React from "react";
import TextInput from "./TextInput";
import SelectOptions from "./SelectOptions";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        type="text"
        label="title"
        name="title"
        className="form-control"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title}
      />

      <SelectOptions
        id="author"
        name="authorId"
        value={props.course.authorId || ""}
        className="form-control"
        onChange={props.onChange}
        error={props.errors.authorId}
      />

      <TextInput
        type="text"
        id="category"
        name="category"
        label="category"
        className="form-control"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
