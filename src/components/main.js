import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutMe from "./aboutme";
import Contact from "./contact";
import LandingPage from "./landingPage/landingPage";
import Resume from "./resume/resume";
import Projects from "./projects";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

export default Main;
