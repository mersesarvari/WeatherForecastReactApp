import axios from "axios";

class WeatherForecastModel {
  constructor() {
    this.forecast = null;
  }
  async getWeatherForecast(longitude, latitude, forecastdays, celsius) {
    if (
      forecastdays === 0 ||
      forecastdays === undefined ||
      forecastdays === null ||
      !forecastdays
    ) {
      forecastdays = 3;
    }
    var tempUnit = "celsius";
    if (celsius === false) {
      tempUnit = "fahrenheit";
    }
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,windspeed_10m,relativehumidity_2m&temperature_unit=${tempUnit}&forecast_days=${forecastdays}`;
    let response = await axios.get(url);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error("Fetching from the AIP was unsuccessful");
    }
  }
}
export default new WeatherForecastModel();
