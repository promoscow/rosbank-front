import React, { useState, useRef } from "react";

import Paper from "@material-ui/core/Paper";
import {
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";
import useStyles from "./styles";
import Loading from "../../components/Loading";

import PropTypes from "prop-types";
import innList from "../../data/inn";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

/**
 * Форма для ввода данных
 */
function IntrodutionForm({ onButtonClick, isLoading }) {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [state, setState] = useState({
    agentCode: "",
    phoneNumber: "",
    innNumber: "",
    comment: "",
    selectError: false
  });

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const setFormValue = (fieldName, value) =>
    setState({ ...state, [fieldName]: value });

  const onSendAgentDataHandler = () => {
    validate() && onButtonClick(state);
  };

  const validate = () => {
    if (state.innNumber) {
      toggleSelectError(false);

      return true;
    }

    toggleSelectError(true);
  };

  const toggleSelectError = value => setState({ ...state, selectError: value });

  return (
    <Grid item className={classes.form}>
      <img src="logo.png" className={classes.logo} alt="Логотип" />

      <br />
      <br />

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2" align="center">
          Создание новой заявки
        </Typography>

        <br></br>

        <ValidatorForm onSubmit={onSendAgentDataHandler}>
          <Grid container direction="column">
            <TextValidator
              required
              validators={["matchRegexp:^\\d{1,20}$"]}
              errorMessages={"Код агента должен состоять из цифр"}
              value={state.agentCode}
              className={classes.formField}
              label="Код агента"
              variant="outlined"
              onChange={e => setFormValue("agentCode", e.target.value)}
            />
            <TextValidator
              required
              validators={["matchRegexp:^\\d{1,20}$"]}
              errorMessages={"Телефон должен состоять из цифр"}
              value={state.phoneNumber}
              className={classes.formField}
              label="Номер телефона"
              variant="outlined"
              onChange={e => setFormValue("phoneNumber", e.target.value)}
            />

            <FormControl
              error={state.selectError}
              variant="outlined"
              className={classes.formField}
            >
              <InputLabel ref={inputLabel}>Выберите ИНН из списка*</InputLabel>
              <Select
                error={state.selectError}
                required
                validators={["matchRegexp:^\\d+$"]}
                labelWidth={labelWidth}
                onChange={e => {
                  setState({
                    ...state,
                    innNumber: e.target.value,
                    selectError: false
                  });
                }}
              >
                {innList.map(x => (
                  <MenuItem value={x} key={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
              {state.selectError && (
                <FormHelperText>Выберите ИНН из списка</FormHelperText>
              )}
            </FormControl>
            <TextValidator
              className={classes.formField}
              label="Комментарий"
              multiline={true}
              variant="outlined"
              onChange={e => setFormValue("comment", e.target.value)}
            />
            <Button
              type="submit"
              disabled={isLoading}
              variant="contained"
              color="primary"
              className={classes.button}
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
        </ValidatorForm>
      </Paper>
    </Grid>
  );
}

IntrodutionForm.propTypes = {
  onButtonClick: PropTypes.func,
  isLoading: PropTypes.bool
};

export default IntrodutionForm;
