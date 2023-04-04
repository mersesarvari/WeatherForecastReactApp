import React, { createContext, useContext, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";

export const employeeContext = React.createContext();

function App() {
  const [employee, setEmployee] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <employeeContext.Provider
            value={{ data: employee, updateEmployee: setEmployee }}
          >
            <WeatherForm />
            <WeatherCard />
          </employeeContext.Provider>
        </div>
      </header>
    </div>
  );
}
export default App;
