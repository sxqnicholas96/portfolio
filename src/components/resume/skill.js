import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Skill extends Component {
  displayProficiencies = list => {
    return list.map(prof => {
      return <p>{prof.tool}</p>;
    });
  };

  displayLevels = list => {
    return list.map(prof => {
      return <p>{prof.level}</p>;
    });
  };
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <b> {this.props.skillTitle}</b>
        </Cell>
        <Cell>{this.displayProficiencies(this.props.profList)}</Cell>
        <Cell>{this.displayLevels(this.props.profList)}</Cell>
      </Grid>
    );
  }
}

export default Skill;
