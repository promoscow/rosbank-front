import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function ResultForm({ data = {} }) {
  console.log(data);
  debugger;
  const position = [data.latitude, data.longitude];
  debugger;

  return (
    <Grid>
      <Paper>
        <Typography variant="h5" component="h2">
          {`Результат обработки заявки ${data.latitude}`}
        </Typography>

        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </Paper>
    </Grid>
  );
}

export default ResultForm;
