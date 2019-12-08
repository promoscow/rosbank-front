import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import ResultForm from "../../components/ResultForm";

/**
 * Страница с результатами запроса
 */
function ResultPage({ agentData, history }) {
  if (!agentData) {
    window.location.href = "/";
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <ResultForm data={agentData}></ResultForm>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state, ownProps) => ({
  agentData: state.agent.result
});

ResultPage.propTypes = {
  sendAgentData: PropTypes.func,
  isRequestLoading: PropTypes.bool
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResultPage)
);
