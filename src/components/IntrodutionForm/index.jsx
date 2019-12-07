import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Input,
  FormControl
} from "@material-ui/core";
import useStyles from "./styles";
import Loading from "../../components/Loading";

import PropTypes from "prop-types";
import innList from "../../data/inn";

/**
 * Форма для ввода данных
 */
function IntrodutionForm({ onButtonClick, isLoading }) {
  const classes = useStyles();
  const [state, setState] = useState({
    agentCode: "",
    phoneNumber: "",
    innNumber: "",
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
    <Grid item className={classes.form}>
      <img src="logo.png" className={classes.logo} />

      <br />
      <br />

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2" align="center">
          Создание новой заявки
        </Typography>

        <br></br>

        <Grid container direction="column">
          <TextField
            className={classes.formField}
            label="Код агента"
            variant="outlined"
            required
            onChange={e => setFieldValue("agentCode", e.target.value)}
          />
          <TextField
            className={classes.formField}
            label="Номер телефона"
            variant="outlined"
            required
            onChange={e => setFieldValue("phoneNumber", e.target.value)}
          />

          <FormControl>
            <InputLabel shrink htmlFor="grouped-native-select">
              Выберите ИНН из списка
            </InputLabel>
            <Select
              className={classes.formField}
              onChange={e => setFieldValue("innNumber", e.target.value)}
              input={<Input id="grouped-native-select" variant="outlined" />}
            >
              {innList.map(x => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            className={classes.formField}
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
      </Paper>
    </Grid>
  );
}

IntrodutionForm.propTypes = {
  onButtonClick: PropTypes.func,
  isLoading: PropTypes.bool
};

export default IntrodutionForm;
