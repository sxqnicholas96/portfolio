import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import { Link } from "react-router-dom";

import "./App.css";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header title={"Seah Xi Qi, Nicholas"} className="header_color">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer title="Navigation">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>

          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
