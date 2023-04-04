import React, { createContext, useContext, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";

export const weatherContext = React.createContext();

function App() {
  const [weather, setWeather] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <weatherContext.Provider
            value={{ data: weather, updateWeather: setWeather }}
          >
            <WeatherForm />
            <WeatherCard />
          </weatherContext.Provider>
        </div>
      </header>
    </div>
  );
}
export default App;
