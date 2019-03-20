import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Language extends Component {
  displaySpoken = list => {
    return list.map(desc => {
      return <li>{desc}</li>;
    });
  };
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>Spoken</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <ul>{this.displayDescripton(this.props.listDescription)}</ul>
        </Cell>
      </Grid>
    );
  }
}

export default Language;
