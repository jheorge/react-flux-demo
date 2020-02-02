import React from "react";
import AboutPage from "./AboutPage.js";
import HomePage from "./HomePage.js";
import Header from "./common/Header.js";
import CoursesPage from "./CoursesPage.js";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.js";
import ManageCoursePage from "./ManageCoursePage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
