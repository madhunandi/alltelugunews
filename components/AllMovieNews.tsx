import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Website from "./Website";
import styled from "styled-components";

const FirstRowGrid = styled(Grid)`
  margin-top: 65px;
`;

const AllMovieNews: React.SFC = () => (
  <Grid container>
    <FirstRowGrid container>
      <Grid item xs={12} sm={4}>
        <Website
          url="http://www.andhravilas.net/en/"
          width="32vw"
          height="90vh"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Website
          url="https://southcelebrities.com/"
          width="32vw"
          height="90vh"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Website
          url="http://www.cinejosh.com/index.html"
          width="32vw"
          height="90vh"
        />
      </Grid>
    </FirstRowGrid>
  </Grid>
);

export default AllMovieNews;
