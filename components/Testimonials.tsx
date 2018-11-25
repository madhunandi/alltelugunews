import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";

const Name = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
`;

const Role = styled.p`
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.8;
`;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    message: `I found this website much interesting. The best part is i don't need to visit multiple news sites to see the news. All news at place. Keep evolving. `,
    name: "Rajesh M",
    role: "Software Engineer, United States"
  },
  {
    message:
      "I am an avid reader and follower of telugu political and movie news. I visit multiple sites daily to read news, but this website helps me a lot to see all the news at one place.",
    name: "Satheesh",
    role: "Software Architect, Bangalore"
  }
];

const styles = theme => ({
  root: {
    maxWidth: "65%",
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: "#f83226"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          autoplay={false}
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <blockquote className="padding">
                  <div className="blockquote-content padding">
                    <p className="oblique">{step.message}</p>
                    <Name>{step.name}</Name>
                    <Role>{step.role}</Role>
                  </div>
                </blockquote>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
