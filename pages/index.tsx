import * as React from "react";
import Layout from "../components/Layout";
import AllNews from "../components/AllNews";
import About from "../components/About";
import ReactPageScroller from "react-page-scroller";
import AllMovieNews from "../components/AllMovieNews";


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }
  onPageChangeClick = pageNumber => {
    console.log(pageNumber);
    this.reactPageScroller.goToPage(pageNumber);
  };
  render() {
    return (
      <Layout>
        <ReactPageScroller
          onPageChange={this.onPageChangeClick}
          ref={c => (this.reactPageScroller = c)}
        >
          <AllNews />
          <AllMovieNews />
          <About />
        </ReactPageScroller>
      </Layout>
    );
  }
}
