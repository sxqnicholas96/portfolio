import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "300px", position: "relative" }}>
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
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
