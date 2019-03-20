import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import { Link } from "react-router-dom";

import "./App.css";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Area / </span>
                <strong>The Title</strong>
              </span>
            }
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/">Home</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/">Home</Link>
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
