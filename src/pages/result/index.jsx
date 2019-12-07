import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import ResultForm from "../../components/ResultForm";

/**
 * Страница с результатами запроса
 */
function ResultPage({ data }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <ResultForm data={data}></ResultForm>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state, ownProps) => ({
  data: state.agent.result
});

ResultPage.propTypes = {
  sendAgentData: PropTypes.func,
  isRequestLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
