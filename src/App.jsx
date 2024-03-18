/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import TabNav from "./components/TabNav";

// data
import { getWeatherData } from "./utilities/getWeatherData";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [location, setLocation] = useState("Seattle");

  useEffect(() => {
    const fetchWeatherData = async () => {
      setDataLoaded(false);
      try {
        const data = await getWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.log("Error: ", error.msg);
      } finally {
        setDataLoaded(true);
      }
    };
    fetchWeatherData();
  }, [location]);

  return (
    <div>
      <Navbar />
      {dataLoaded && <TabNav weatherData={weatherData} />}
    </div>
  );
}

export default App;
