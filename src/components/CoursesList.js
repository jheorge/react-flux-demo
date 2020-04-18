import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CoursesList(props) {
  return (
    <div>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Ttile </th>
            <th>Author Id </th>
            <th>Category </th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => {
            return (
              <tr key={course.id}>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// CoursesList.propTypes = {
//   courses: PropTypes.array.isRequired
// };

CoursesList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CoursesList;
