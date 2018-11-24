import * as React from "react";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import styled from "styled-components";
import { Info } from "@material-ui/icons";

const EachLink = styled.a`
  background: ${props => (props.active ? "#f83226" : "#ddd")};
  color: ${props => (props.active ? "#fff" : "#555")};
  cursor: pointer;
  padding: 6px 12px;
  margin: 0 5px;
  border-radius: 4px;
`;

const AppBarExtended = styled(AppBar)`
  display: flex;
  flex-direction: row !important;
  height: 65px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const InfoMessage = styled.p`
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Layout extends React.Component {
  state = { politics: true, movies: false, about: false };
  onPoliticsClick = () => {
    const { children } = this.props;
    children.props.onPageChange(0);
    this.setState({ politics: true, movies: false, about: false });
  };
  onMoviesClick = () => {
    const { children } = this.props;
    children.props.onPageChange(1);
    this.setState({ politics: false, movies: true, about: false });
  };
  onAboutClick = () => {
    const { children } = this.props;
    children.props.onPageChange(2);
    this.setState({ politics: false, movies: false, about: true });
  };
  render() {
    const { children } = this.props;
    const { politics, movies, about } = this.state;
    return (
      <div>
        <Head>
          <title> All telugu news at one place </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <AppBarExtended position="fixed" color="default">
          <img
            src="../static/alltelugunews.png"
            alt="alltelugunews"
            width="215px"
          />
          <InfoMessage>
            <Info /> 
            {" "} Use browser back button to navigate once you open any link.
          </InfoMessage>
          <nav>
            <EachLink active={politics} onClick={this.onPoliticsClick}>
              Politics
            </EachLink>
            <EachLink active={movies} onClick={this.onMoviesClick}>
              Movies
            </EachLink>
            <EachLink active={about} onClick={this.onAboutClick}>
              About
            </EachLink>
          </nav>
        </AppBarExtended>
        {children}
      </div>
    );
  }
}

export default Layout;
