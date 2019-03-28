import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class GradeTable extends Component {
  displaySubjects = list => {
    return list.map(subject => {
      return <p>{subject.title}</p>;
    });
  };

  displayGrades = list => {
    return list.map(subject => {
      return <p>{subject.grade}</p>;
    });
  };
  render() {
    return (
      <Grid>
        <Cell col={6}>
          <p style={{ fontWeight: "bold", fontSize: 16 }}>{this.props.title}</p>
          <hr style={{ width: "110%" }} />
          {this.displaySubjects(this.props.gradeList)}
        </Cell>
        <Cell style={{ textAlign: "center" }}>
          <p style={{ fontWeight: "bold", fontSize: 16 }}>Grade</p>
          <hr style={{ width: "100%" }} />
          {this.displayGrades(this.props.gradeList)}
        </Cell>
      </Grid>
    );
  }
}

export default GradeTable;
