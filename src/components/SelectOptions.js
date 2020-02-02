import React from "react";
import PropTypes from "prop-types";
function SelectOptions(props) {
  return (
    <div className="form-group">
      <label htmlFor="author">{props.id}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value || ""}
          className="form-control"
          onChange={props.onChange}
        >
          return(
          {props.options.map(option => {
            <option value={option.value}>{option.label}</option>;
          })}
          );
        </select>
      </div>
    </div>
  );
}

SelectOptions.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

SelectOptions.defaultProps = {
  options: [
    { value: "", label: "" },
    { value: "1", label: "Cory House" },
    { value: "2", label: "Scott Allen" }
  ]
};
export default SelectOptions;
