import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import "./landingPage.css";
import Avatar from "../../images/avatar.png";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing_grid">
          <Cell col={12}>
            <img src={Avatar} alt="Avatar" />
            <div className="banner_text">
              <h1> Software Developer</h1>
              <hr />

              <p>
                HTML/CSS | React | ReactNative | JavaScript| Java | NodeJS |
                Express
              </p>
            </div>

            <div className="social_links">
              {/*LinkedIn*/}
              <a
                href="https://www.linkedin.com/in/sxqnicholas96/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/*GitHub*/}
              <a
                href="https://github.com/sxqnicholas96"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
