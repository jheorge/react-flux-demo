import React from "react";
import PropTypes from "prop-types";

function CoursesList(props) {
  return (
    <div>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Ttile </th>
            <th>Author Id </th>
            <th>Category </th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.id}</td>
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
