import React from "react";
import PropTypes from "prop-types";

import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import useStyles from "./styles";
import { formatPath, getMapUrl } from "../../helpers/common";

function ResultForm({ data }) {
  const classes = useStyles();

  const targetBank = data.resultBranchDto;
  const employeeName = targetBank.employees[0].name;
  const bankPosition = [+targetBank.geoLat, +targetBank.geoLon];

  const mapUrl = getMapUrl(
    data.latitude,
    data.longitude,
    targetBank.geoLat,
    targetBank.geoLon
  );

  /**
   * Возвращает представление по подразделению
   * @param {Object} data - Набор данных
   */
  const getDivisionInfo = data => (
    <div className={classes.divisionInfoWrapper}>
      <Typography variant="h6" className={classes.primaryColor}>
        {data.name}
      </Typography>
      <Typography variant="h7">{`Адрес : ${data.street}`}</Typography>

      <br />

      <Typography variant="h7">{`Количество сотрудников : ${data.countEmployee}`}</Typography>

      <br />

      <Typography variant="h7">{`Длина пути : ${formatPath(
        data.path
      )}`}</Typography>
    </div>
  );

  return (
    <Grid>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Наиболее подходящее отделение:
        </Typography>

        <hr />

        {getDivisionInfo(data.resultBranchDto)}

        <hr />

        <Typography variant="h6">
          {`Ваш сотрудник: `}
          <span className={classes.primaryColor}>{employeeName}</span>
        </Typography>

        <br />

        <div className={classes.mapWrapper}>
          <Map center={bankPosition} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={bankPosition}>
              <Popup>
                <Typography variant="h6" className={classes.primaryColor}>
                  {targetBank.name}
                </Typography>
                <Typography variant="h7">{`Адрес : ${targetBank.street}`}</Typography>
              </Popup>
            </Marker>
          </Map>
        </div>

        <br />

        <a href={mapUrl}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            fullWidth
          >
            Построить маршрут
          </Button>
        </a>
      </Paper>
    </Grid>
  );
}

ResultForm.propTypes = {
  data: PropTypes.object
};

export default ResultForm;
