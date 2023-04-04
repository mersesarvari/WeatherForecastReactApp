import { useContext } from "react";
import { weatherContext } from "../App";
import ForecastTable from "./ForecastTable";

const WeatherCard = () => {
  let context = useContext(weatherContext);

  return <>{Object.keys(context.data).length > 0 && <ForecastTable />}</>;
};

export default WeatherCard;
