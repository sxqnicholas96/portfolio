import React, { Component } from "react";
import { Layout, Content } from "react-mdl";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./App.css";
import Main from "./components/main";
import Avatar from "./images/avatar.png";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <AppBar position="static" className="header_color">
            <Toolbar>
              <IconButton component={RouterLink} to="/" disableRipple={true}>
                <img style={{ width: "60px" }} src={Avatar} alt="Avatar" />
              </IconButton>
              <Typography style={{ flexGrow: 1 }} variant="h6" color="inherit">
                Seah Xi Qi, Nicholas
              </Typography>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                size="large"
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/resume"
                size="large"
              >
                Resume
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/projects"
                size="large"
              >
                Projects
              </Button>
            </Toolbar>
          </AppBar>

          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
