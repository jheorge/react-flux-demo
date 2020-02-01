import React from "react";
import { Link } from "react-router-dom"; // import with `ES import syntax`

function HomePage() {
  return (
    <div className="jumbotron">
      <h1> Pluralsight Administration </h1>
      <p> React, Flux, and react router for ultra - responsive web apps. </p>
      <Link to="about" className="btn btn-primary">
        about
      </Link>
    </div>
  );
}

export default HomePage;
