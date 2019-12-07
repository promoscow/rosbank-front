import React from "react";

import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import agentActions from "../../workflows/actions/agent";
import IntrodutionForm from "../../components/IntrodutionForm";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

/**
 * Страница с формой для ввода данных
 */
function IntrodutionPage({ sendAgentData, isRequestLoading, history }) {
  const onButtonClick = data => {
    sendAgentData(data, history);
  };

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
        <IntrodutionForm
          onButtonClick={onButtonClick}
          isLoading={isRequestLoading}
        ></IntrodutionForm>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({
  sendAgentData: (data, history) =>
    dispatch(agentActions.sendAgentData(data, history))
});

const mapStateToProps = (state, ownProps) => ({
  isRequestLoading: state.loading
});

IntrodutionForm.propTypes = {
  sendAgentData: PropTypes.func,
  isRequestLoading: PropTypes.bool
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IntrodutionPage)
);
