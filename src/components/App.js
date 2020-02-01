import React from "react";
import AboutPage from "./AboutPage.js";
import HomePage from "./HomePage.js";
import Header from "./common/Header.js";
import CoursesPage from "./CoursesPage.js";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.js";

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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
