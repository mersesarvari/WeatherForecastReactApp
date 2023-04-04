import WeatherForecastModel from "../models/WeatherForecastModel";
import React, { useState, useContext, useRef } from "react";
import WeatherContext, { employeeContext } from "../App";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const WeatherForm = () => {
  let context = useContext(employeeContext);
  const [lng, setLng] = React.useState(0.0);
  const [lat, setLat] = React.useState(0.0);
  const [celsius, setCelsius] = React.useState(true);
  const [days, setDays] = React.useState(3);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let forecast = await WeatherForecastModel.getWeatherForecast(
      lng,
      lat,
      days,
      celsius
    );
    await context.updateEmployee(forecast);
  };
  const handleLng = (event) => {
    setLng(event.target.value);
  };

  const handleLat = (event) => {
    setLat(event.target.value);
  };

  const handleTemperature = (event) => {
    setCelsius(event.target.value);
  };

  const handleDays = (event) => {
    setDays(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-container">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <TextField
              value={lng}
              onChange={handleLng}
              id="longitude"
              type="number"
              label="Longitude"
              inputProps={{
                step: 0.00001,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={lat}
              onChange={handleLat}
              id="latitude"
              type="number"
              label="Latitude"
              inputProps={{
                step: 0.00001,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Measure</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Measure"
                  value={celsius}
                  onChange={handleTemperature}
                >
                  <MenuItem value={true}>°C</MenuItem>
                  <MenuItem value={false}>°F</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Days</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Days"
                  id="demo-simple-select"
                  value={days}
                  onChange={handleDays}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="contained" className="button">
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default WeatherForm;
