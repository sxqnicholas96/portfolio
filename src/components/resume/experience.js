import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Experience extends Component {
  displayDescripton = list => {
    return list.map(desc => {
      console.log(desc);
      return <li>{desc}</li>;
    });
  };
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.companyName}</h4>
          <i>{this.props.jobRole}</i>
          <ul>{this.displayDescripton(this.props.listDescription)}</ul>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
