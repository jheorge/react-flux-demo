import React from "react";
import AboutPage from "./AboutPage.js";
import HomePage from "./HomePage.js";
import Header from "./common/Header.js";
import CoursesPage from "./CoursesPage.js";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AboutPage />;
    } else if (route === "/courses") {
      return <CoursesPage />;
    }
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
