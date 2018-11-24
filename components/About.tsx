import * as React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Testimonials from "./Testimonials";

const AboutGrid = styled(Grid)`
  padding: 40px;
  background: #1c1c1c;
  min-height: 200px;
  height: 30vh;
  color: #fff;
  text-align: center;
  h2 {
    font-weight: 100;
  }
`;

const TestimonialGrid = styled(Grid)`
  height: calc(70vh - 65px);
  background: #f5f5f5;
  margin-top: 65px;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
`;

const EmailLink = styled.a`
  color: #f83226;
`;

const About: React.SFC = () => (
  <Grid container>
    <TestimonialGrid container>
     <Testimonials />
    </TestimonialGrid>
    <AboutGrid container justify="center" align-items="center">
      <Grid item xs={12} sm={6}>
        <h4>
          Hi all, This website is made with love for telugu
          people to get the all the news at one place.{" "}
        </h4>
        <p>
          <small>
          I would like to ask an help to make it more useful. Please feel free to reach me at{" "}
            <EmailLink href="mailto: alltelugunews@gmail.com">
              alltelugunews@gmail.com
            </EmailLink>{" "}
            with your suggestions or websites which you feel it must be included in the above list. Thanks.{" "}
          </small>
        </p>
      </Grid>
    </AboutGrid>
  </Grid>
);

export default About;
