import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import useStyles from "./styles";
import { formatPath, getMapUrl } from "../../helpers/common";

const mockData = {
  latitude: 55.7001865,
  longitude: 37.5802234,
  cityName: "Москва",
  resultBranchDto: {
    id: 26,
    name: "Пречистенка",
    geoLat: 55.7390391,
    geoLon: 37.5867524,
    street: "ул. Пречистенка, д.402, стр.1",
    employees: [
      {
        id: 103,
        name: "Евгений",
        online: false,
        countLid: 2,
        branchId: 26
      },
      {
        id: 104,
        name: "Виктория",
        online: true,
        countLid: 0,
        branchId: 26
      },
      {
        id: 105,
        name: "Вероника",
        online: true,
        countLid: 2,
        branchId: 26
      },
      {
        id: 106,
        name: "Елизавета",
        online: false,
        countLid: 0,
        branchId: 26
      }
    ],
    path: 4.377047249831501,
    countEmployee: 4
  },
  branches: [
    {
      id: 26,
      name: "Пречистенка",
      geoLat: 55.7390391,
      geoLon: 37.5867524,
      street: "ул. Пречистенка, д.402, стр.1",
      employees: [
        {
          id: 103,
          name: "Евгений",
          online: false,
          countLid: 2,
          branchId: 26
        },
        {
          id: 104,
          name: "Виктория",
          online: true,
          countLid: 0,
          branchId: 26
        },
        {
          id: 105,
          name: "Вероника",
          online: true,
          countLid: 2,
          branchId: 26
        },
        {
          id: 106,
          name: "Елизавета",
          online: false,
          countLid: 0,
          branchId: 26
        }
      ],
      path: 4.377047249831501,
      countEmployee: 4
    },
    {
      id: 34,
      name: "Черёмушки",
      geoLat: 55.6674432,
      geoLon: 37.5535585,
      street: " ул. Профсоюзная, д.43, корп. 1",
      employees: [
        {
          id: 133,
          name: "Ольга",
          online: true,
          countLid: 0,
          branchId: 34
        },
        {
          id: 134,
          name: "Арина",
          online: false,
          countLid: 2,
          branchId: 34
        },
        {
          id: 135,
          name: "Ирина",
          online: true,
          countLid: 0,
          branchId: 34
        }
      ],
      path: 4.691447401775911,
      countEmployee: 3
    },
    {
      id: 30,
      name: "Якиманка",
      geoLat: 55.7317793,
      geoLon: 37.6115177,
      street: "ул. Большая Якиманка, д.52",
      employees: [
        {
          id: 120,
          name: "Екатерина",
          online: true,
          countLid: 0,
          branchId: 30
        },
        {
          id: 121,
          name: "Ольга",
          online: true,
          countLid: 2,
          branchId: 30
        },
        {
          id: 122,
          name: "Николай",
          online: true,
          countLid: 1,
          branchId: 30
        },
        {
          id: 123,
          name: "Сергей",
          online: false,
          countLid: 0,
          branchId: 30
        }
      ],
      path: 4.940438772511039,
      countEmployee: 4
    },
    {
      id: 1,
      name: "Кутузовский",
      geoLat: 55.7474769,
      geoLon: 37.5573867,
      street: "Кутузовский проспект, д.15",
      employees: [
        {
          id: 1,
          name: "Ольга",
          online: true,
          countLid: 2,
          branchId: 1
        },
        {
          id: 2,
          name: "Николай",
          online: true,
          countLid: 1,
          branchId: 1
        },
        {
          id: 3,
          name: "Сергей",
          online: false,
          countLid: 0,
          branchId: 1
        },
        {
          id: 4,
          name: "Григорий",
          online: true,
          countLid: 0,
          branchId: 1
        }
      ],
      path: 5.834492210038771,
      countEmployee: 4
    },
    {
      id: 29,
      name: "Малая Ордынка",
      geoLat: 55.7315533,
      geoLon: 37.6259536,
      street: "ул. Малая Ордынка, д.50/72, стр.2",
      employees: [
        {
          id: 116,
          name: "Валентина",
          online: true,
          countLid: 0,
          branchId: 29
        },
        {
          id: 117,
          name: "Анастасия",
          online: false,
          countLid: 2,
          branchId: 29
        },
        {
          id: 118,
          name: "Алиса",
          online: true,
          countLid: 0,
          branchId: 29
        },
        {
          id: 119,
          name: "Гульнара",
          online: false,
          countLid: 1,
          branchId: 29
        }
      ],
      path: 6.160920585737185,
      countEmployee: 4
    }
  ]
};

function ResultForm({ data = {} }) {
  const classes = useStyles();

  const position = [+data.latitude, +data.longitude];
  const mapUrl = getMapUrl(
    mockData.latitude,
    mockData.longitude,
    mockData.resultBranchDto.geoLat,
    mockData.resultBranchDto.geoLon
  );

  const getDivisions = data =>
    data.branches && data.branches.map(x => getDivisionInfo(x));

  const getDivisionInfo = data => (
    <div className={classes.divisionInfoWrapper}>
      <Typography variant="h6">{`${data.name}`}</Typography>
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
        {/* <Typography variant="h5" component="h2">
          Ближайшие отделения:
        </Typography>
        <hr></hr> */}

        {/* {getDivisions(mockData)} */}

        {/* <br />
        <hr></hr> */}
        <Typography variant="h5" component="h2">
          Наиболее подходящее отделение:
        </Typography>
        <hr></hr>

        {getDivisionInfo(mockData.resultBranchDto)}

        <hr></hr>
        <Typography variant="h6">{`Ваш сотрудник: ${mockData.resultBranchDto.employees[0].name}`}</Typography>

        <br />

        <div className={classes.mapWrapper}>
          <Map center={[55.7390391, 37.5867524]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[55.7390391, 37.5867524]}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </div>

        <Button color="primary">
          <a href={mapUrl}>Построить маршрут</a>
        </Button>
      </Paper>
    </Grid>
  );
}

export default ResultForm;
