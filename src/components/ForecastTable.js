import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { employeeContext } from "../App";
import { Typography } from "@mui/material";

export default function ForecastTable() {
  let context = React.useContext(employeeContext);
  function TableData() {
    var indents = [];

    for (let i = 0; i < context.data.hourly.time.length; i++) {
      indents.push(
        <TableRow
          key={i}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="right">{context.data.hourly.time[i]}</TableCell>
          <TableCell align="right">
            {context.data.hourly.temperature_2m[i]}
          </TableCell>
          <TableCell align="right">
            {context.data.hourly.windspeed_10m[i]}
          </TableCell>
          <TableCell align="right">
            {context.data.hourly.relativehumidity_2m[i]}
          </TableCell>
        </TableRow>
      );
    }
    console.log(indents.length);
    return indents;
  }
  return (
    <>
      <TableContainer component={Paper} className="forecastTable">
        <Typography className="tableinfotext">Current weather</Typography>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Time</TableCell>
              <TableCell align="center">Temperature</TableCell>
              <TableCell align="center">Windspeed</TableCell>
              <TableCell align="center">Weathercode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                {context.data.current_weather.time}
              </TableCell>
              <TableCell align="center">
                {context.data.current_weather.temperature} (
                {context.data.hourly_units.temperature_2m})
              </TableCell>
              <TableCell align="center">
                {context.data.current_weather.windspeed}(
                {context.data.hourly_units.windspeed_10m})
              </TableCell>
              <TableCell align="center">
                {context.data.current_weather.weathercode}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} className="forecastTable">
        <Typography className="tableinfotext">
          Weatherforecast for the next
          {" " + context.data.hourly.time.length / 24} days (
          {context.data.hourly.time.length} hours)
        </Typography>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Time</TableCell>
              <TableCell align="center">
                Temperature ({context.data.hourly_units.temperature_2m})
              </TableCell>
              <TableCell align="center">
                Windspeed ({context.data.hourly_units.windspeed_10m})
              </TableCell>
              <TableCell align="center">
                Humidity ({context.data.hourly_units.relativehumidity_2m})
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableData />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
