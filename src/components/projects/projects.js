import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ProjectCard from "./projectCard";
import PartyCards from "../../images/partycards.png";
import RecruitBook from "../../images/recruitbook.png";

const TabContainer = props => {
  return (
    <Typography
      component="div"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 8 * 3
      }}
    >
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    alignItem: "center"
  }
});

const tabStyles = {
  fontFamily: "sans-serif",
  fontSize: 16,
  fontWeight: "bold"
};

class Projects extends Component {
  state = {
    value: "React"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          style={{
            backgroundColor: "white",
            color: "black",
            justifyContent: "center"
          }}
          position="static"
        >
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab style={tabStyles} value={"React"} label="React" />
            <Tab style={tabStyles} value={"Java"} label="Java" />
          </Tabs>
        </AppBar>
        <Grid>
          {value === "React" && (
            <TabContainer>
              <ProjectCard
                title="PartyCards"
                image={PartyCards}
                description={`PartyCards is a online platform to play your favourite card games with your friends!`}
                githubLink={`https://github.com/sxqnicholas96/PartyCards`}
                demoLink={`https://www.youtube.com/watch?v=h9m96uM2Dzc`}
              />
            </TabContainer>
          )}
          {value === "Java" && (
            <TabContainer>
              <ProjectCard
                title="RecruitBook"
                image={RecruitBook}
                description={`RecruitBook v1.4 is an offline desktop application that allows you to manage job candidates and job offers throughout the process of recruiting. Designed specifically to ease the recruitment process, you can use RecruitBook to add, edit, find, filter, shortlist, email and delete candidates, as well as job offers, to help you efficiently link potential candidates to the job offer that is best suited for them.`}
                githubLink={`https://github.com/sxqnicholas96/RecruitBook`}
              />
            </TabContainer>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
