import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutMe from "./aboutme";
import Contact from "./contact";
import LandingPage from "./landingpage";
import Resume from "./resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/aboutme" component={AboutMe} />
    </Switch>
  );
};

export default Main;
