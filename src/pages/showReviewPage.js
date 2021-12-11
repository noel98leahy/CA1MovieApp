import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateTvPage";


const MovieReviewPage = (props) => {
  const {show, review} = props.location.state
  return (
    <PageTemplate show={show}>
      
    </PageTemplate>
  );
};

export default withRouter(MovieReviewPage);