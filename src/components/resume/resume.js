import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Avatar from "../../images/avatar.png";
import Education from "./education";
import Experience from "./experience";
import Achievement from "./achievement";
import GradeTable from "./gradeTable";
import Skill from "./skill";
import CV from "../../file/Nicholas_Xi_Qi_SEAH_CV.pdf";

import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell style={{ position: "sticky", top: 0 }} col={4}>
            <div style={{ position: "sticky", top: "2em" }}>
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <img src={Avatar} alt="avatar" style={{ height: "200px" }} />
              </div>
              <h2>Seah Xi Qi, Nicholas</h2>
              <h4 style={{ color: "grey" }}>Software Developer</h4>
              <hr style={{ borderTop: "3px solid #000000", width: "50%" }} />
              <p style={{ fontSize: "1.3em" }}>
                I'm an undergraduate majoring in Information Security but really
                just interested in all things software related. I have
                experience coding in C, C++, Java, JavaScript and Python.
              </p>
              <p style={{ fontSize: "1.3em" }}>
                Mainly a web developer experienced in using React, ReactNative,
                Express, Node.js to build CRUD web applications with RESTful
                APIs. Working towards becoming an experienced full stack
                developer across different technologies available.
              </p>
              <p style={{ fontSize: "1.3em" }}>
                Currently working part-time during university at local start-up
                StaffAny. Looking forward to starting my own tech company in the
                future.
              </p>

              <hr style={{ borderTop: "3px solid #000000", width: "50%" }} />

              <div className="links">
                <div>
                  <i
                    style={{ fontSize: "1.4em" }}
                    class="fab fa-linkedin"
                    aria-hidden="true"
                  />
                  <a
                    style={{ textDecoration: "None", marginLeft: "0.5em" }}
                    href="https://www.linkedin.com/in/sxqnicholas96/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    My LinkedIn
                  </a>
                </div>
                <div>
                  <i
                    style={{ fontSize: "1.4em" }}
                    class="fab fa-github-square"
                    aria-hidden="true"
                  />
                  <a
                    style={{ textDecoration: "None", marginLeft: "0.5em" }}
                    href="https://github.com/sxqnicholas96"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    My GitHub
                  </a>
                </div>
                <div>
                  <i
                    style={{ fontSize: "1.4em" }}
                    class="fas fa-envelope-square"
                    aria-hidden="true"
                  />
                  <a
                    style={{ textDecoration: "None", marginLeft: "0.5em" }}
                    href="mailto:nicholas.seah@u.nus.edu"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    My Email
                  </a>
                </div>
                <div>
                  <i
                    style={{ fontSize: "1.4em" }}
                    class="fas fa-file-pdf"
                    aria-hidden="true"
                  />
                  <a
                    style={{ textDecoration: "None", marginLeft: "0.5em" }}
                    href={CV}
                    download
                  >
                    My Resume
                  </a>
                </div>
              </div>
              <div className="links" />
            </div>
          </Cell>

          <Cell className="resume_right_col" col={8}>
            <h2 style={{ paddingLeft: "20px" }}> Education</h2>
            <Education
              startYear="Aug 2017"
              endYear="Present"
              schoolName="National University of Singapore"
              listDescription={[
                "Bachelor of Computing (Honors) in Information Security"
              ]}
            />
            <Grid style={{ marginTop: "-2em", marginBottom: "-2em" }}>
              <Cell col={4} />
              <Cell col={8}>
                <GradeTable
                  title="Programming Modules"
                  gradeList={[
                    { title: "Computer Organisation", grade: "A" },
                    { title: "Calculus for Computing", grade: "A" },
                    {
                      title: "Introduction to Information Security",
                      grade: "A"
                    },
                    {
                      title:
                        "Software Engineering & Object-Oriented Programming",
                      grade: "A-"
                    },
                    {
                      title: "Data Structures and Algorithms",
                      grade: "A-"
                    },
                    {
                      title: "Programming Methodology ",
                      grade: "A-"
                    }
                  ]}
                />
              </Cell>
            </Grid>

            <hr className="content_break" />
            <Education
              startYear="Jan 2013"
              endYear="Dec 2014"
              schoolName="Anglo - Chinese Junior College"
              listDescription={[
                "Singapore-Cambridge General Certificate of Education Advanced 	Level"
              ]}
            />
            <Grid style={{ marginTop: "-2em", marginBottom: "-2em" }}>
              <Cell col={4} />
              <Cell col={8}>
                <GradeTable
                  title="Subjects"
                  gradeList={[
                    { title: "Mathematics", grade: "A" },
                    { title: "Physics", grade: "B" },
                    {
                      title: "Chemistry",
                      grade: "B"
                    },
                    {
                      title: "Economics",
                      grade: "B"
                    },
                    {
                      title: "General Paper",
                      grade: "B"
                    }
                  ]}
                />
              </Cell>
            </Grid>
            <hr style={{ borderTop: "3px solid #ffffff", width: "100%" }} />
            <h2 style={{ paddingLeft: "20px" }}> Work Experience</h2>
            <Experience
              startYear="Aug 2018"
              endYear="Present"
              companyName="StaffAny"
              jobRole="Software Engineer"
              listDescription={[
                "StaffAny is a SaaS start-up targeting the HR industry, aiming to provide software solutions to help managers efficiently manage staff payroll and the scheduling of staff on their mobile and web browsers.",
                "Worked part-time during university semesters as a quality assurance engineer, responsible for testing product updates and diagnosing bugs that occur before product releases.",
                "Transitioned to software engineering role during study holiday in December 2018 and assisted in building of product features.",
                "Engineered automated tests for the company product on the mobile platform."
              ]}
            />
            <hr className="content_break" />

            <Experience
              startYear="May 2017"
              endYear="Aug 2017"
              companyName="Pearson Education South Asia Private Limited"
              jobRole="Customer Support Assistant"
              listDescription={[
                "Served as a primary point of contact with customers and helped customers place book orders.",
                "Managed customer complaints and helped to escalate customer inquiries whenever necessary."
              ]}
            />
            <hr className="content_break" />

            <Experience
              startYear="May 2015"
              endYear="Mar 2017"
              companyName="Singapore Armed Forces"
              jobRole="Artillery Operator"
              listDescription={[
                "Worked in a detachment/section of 8 people whose main function is to deploy an artillery gun.",
                "Recorded the fastest deployment timings for our Detachment Proficiency Test and won the Top Gun award in our unit.",
                "Achieved the second highest score in the history of our gun unit for our FATEP (Field Artillery Training Evaluation Program) as a battery."
              ]}
            />

            <hr style={{ borderTop: "3px solid #ffffff", width: "100%" }} />

            <h2 style={{ paddingLeft: "20px" }}>
              {" "}
              Scholastic/Curricular Achievements
            </h2>

            <Achievement
              startYear="Jan 2013"
              endYear="Dec 2014"
              activityName="Anglo - Chinese Junior College Concert Band"
              listDescription={[
                "Served as Quartermaster, assisting with the logistic administration of the band.",
                "Achieved Certificate of Distinction, the highest merit in the Singapore Youth Festival 2013 which is a national concert band competition."
              ]}
            />
            <hr className="content_break" />

            <Achievement
              startYear="Jun 2009"
              endYear="Jun 2012"
              activityName="Nan Hua Symphonic Band"
              listDescription={[
                "Served as Band Major (Chairperson) of the band from 2011 to 2012 and organized day to day activities as well as maintain discipline within the band.",
                "Achieved Silver Award in Singapore Youth Festival 2009 and Gold Award in Singapore Youth Festival 2011.",
                "Awarded the top performer in the band as an extra-curricular activity."
              ]}
            />

            <hr style={{ borderTop: "3px solid #ffffff", width: "100%" }} />

            <h2 style={{ paddingLeft: "20px" }}> Skill Sets & Proficiencies</h2>

            <Skill
              skillTitle="Programming"
              profList={[
                { tool: "C", level: "Proficient" },
                { tool: "C++", level: "Proficient" },
                { tool: "Java", level: "Proficient" },
                { tool: "Python", level: "Intermediate" },
                { tool: "Perl", level: "Basic" },
                { tool: "Shell Scripting", level: "Basic" },
                { tool: "Intel x86", level: "Basic" }
              ]}
            />
            <hr className="content_break" />

            <Skill
              skillTitle="Scripting"
              profList={[{ tool: "JavaScript", level: "Proficient" }]}
            />

            <hr className="content_break" />
            <Skill
              skillTitle="Markup"
              profList={[{ tool: "XML", level: "Basic" }]}
            />
            <hr className="content_break" />
            <Skill
              skillTitle="Frameworks"
              profList={[
                { tool: "React Native", level: "Proficient" },
                { tool: "ReactJS", level: "Proficient" },
                { tool: "Express", level: "Intermediate" }
              ]}
            />
            <hr className="content_break" />
            <Skill
              skillTitle="Database"
              profList={[
                { tool: "PostgreSQL DBMS", level: "Proficient" },
                { tool: "SQL", level: "Proficient" }
              ]}
            />
            <hr className="content_break" />
            <Skill
              skillTitle="Server Management & Network"
              profList={[
                { tool: "Server Setup/Maintenance", level: "Intermediate" }
              ]}
            />
            <hr className="content_break" />
            <Skill
              skillTitle="Operating Systems"
              profList={[
                { tool: "Linux", level: "Proficient" },
                {
                  tool: "Windows 9x, 2000, XP, Vista, 7, 8, 10",
                  level: "Proficient"
                }
              ]}
            />
            <hr className="content_break" />
            <Skill
              skillTitle="Multimedia"
              profList={[
                { tool: "GIMP", level: "Proficient" },
                { tool: "Camtasia Studio", level: "Proficient" },
                { tool: "Adobe Photoshop CS6", level: "Basic" }
              ]}
            />
            <hr className="content_break" />

            <Skill
              skillTitle="Non-technical Skills"
              profList={[{ tool: "Project Management", level: "Intermediate" }]}
            />
            <hr className="content_break" />
            <Skill
              skillTitle="Office Productivity"
              profList={[
                { tool: "Microsoft Word", level: "Proficient" },
                { tool: "Microsoft Powerpoint", level: "Proficient" },
                { tool: "Microsoft Excel", level: "Intermediate" }
              ]}
            />
            <hr style={{ borderTop: "3px solid #ffffff", width: "100%" }} />

            <h2 style={{ paddingLeft: "20px" }}> Language Proficiency</h2>
            <Skill
              skillTitle="Spoken"
              profList={[
                { tool: "English", level: "Fluent" },
                { tool: "Mandarin", level: "Fluent" }
              ]}
            />
            <Skill
              skillTitle="Written"
              profList={[
                { tool: "English", level: "Competent" },
                { tool: "Mandarin", level: "Average" }
              ]}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
