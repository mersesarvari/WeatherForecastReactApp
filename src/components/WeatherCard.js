import { useContext } from "react";
import { employeeContext, WeatherContext } from "../App";
import ForecastTable from "./ForecastTable";

const WeatherCard = () => {
  let context = useContext(employeeContext);

  return <>{Object.keys(context.data).length > 0 && <ForecastTable />}</>;
};

export default WeatherCard;
