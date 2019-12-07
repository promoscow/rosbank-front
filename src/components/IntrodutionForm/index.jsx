import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import Loading from "../../components/Loading";

import PropTypes from "prop-types";

const StyledInput = withStyles({
  root: {
    marginBottom: 20
  }
})(TextField);

/**
 * Форма для ввода данных
 */
function IntrodutionForm({ onButtonClick, isLoading }) {
  const classes = useStyles();
  const [state, setState] = useState({
    agentCode: "",
    phoneNumber: "",
    innNumber: "7707083893",
    comment: ""
  });

  const setFieldValue = (fieldName, value) =>
    setState({ ...state, [fieldName]: value });

  const onSendAgentDataHandler = () => {
    validate() && onButtonClick(state);
  };

  const validate = () => {
    return true;
  };

  return (
    <Grid item>
      <img src="rosbank-logo.svg" />

      <br></br>
      <br></br>
      <br></br>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Создание новой заявки
        </Typography>

        <br></br>

        <Grid container direction="column">
          <StyledInput
            className={classes.input}
            label="Код агента"
            variant="outlined"
            required
            onChange={e => setFieldValue("agentCode", e.target.value)}
          />
          <StyledInput
            label="Номер телефона"
            variant="outlined"
            required
            onChange={e => setFieldValue("phoneNumber", e.target.value)}
          />
          <StyledInput
            label="Номер ИНН"
            variant="outlined"
            required
            onChange={e => setFieldValue("innNumber", e.target.value)}
          />
          <StyledInput
            label="Комментарий"
            multiline={true}
            variant="outlined"
            onChange={e => setFieldValue("comment", e.target.value)}
          />

          <Button
            disabled={isLoading}
            variant="contained"
            color="primary"
            onClick={onSendAgentDataHandler}
          >
            {isLoading ? (
              <Loading
                loading={true}
                size={20}
                className={classes.buttonLoader}
              />
            ) : (
              "Отправить"
            )}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

IntrodutionForm.propTypes = {
  onButtonClick: PropTypes.func,
  isLoading: PropTypes.bool
};

export default IntrodutionForm;
