import "./App.css";
import { FiCloudRain } from "react-icons/fi";
import axios from "axios";
import { useEffect, useState } from "react";


import { WiSunrise ,WiHumidity,WiWindy,WiBarometer} from "react-icons/wi";

function App() {
  const [value, setValue] = useState();
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [humid, setHumid] = useState();
  const [pressure, setPressure] = useState();
  const [wind, setWind] = useState();
  const [conutry, setCountry] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f709c505b06229863a2bcf92527f76e7`
      )
      .then((res) => {
        setTemp(res.data.main.temp);
        setPressure(res.data.main.pressure);
        setHumid(res.data.main.humidity);
        setWind(res.data.wind.speed);
        setCity(res.data.name);
        setCountry(res.data.sys.country);
      });
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <>
      <div className="weather-box">
        <div className="weather-heading">
          <h1>Weather App </h1>
        </div>

       

        <div className="weather-search">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="weather-input"
          />
          <button onClick={handleSearch} className="search-button">
            search
          </button>
        </div>



        <div className="weather-cloud">
          <FiCloudRain color='white' size='60'/>
        </div>
        <div className="weather-city">
          <h1>
            {city} | {conutry}
          </h1>
        </div>
        
        <div className="weather-row">
          <div className="weather-column">
            
            <WiSunrise  color='white' size="50"/>
            <p>Temp: {(temp - 273).toFixed(2)} &deg;C</p>
          </div>
          <div className="weather-column">
          <WiBarometer color='white' size='50'/>
            <p>Pressure: {pressure}</p>
          </div>
        </div>

        <div className="weather-row">
          <div className="weather-column">
          <WiHumidity color='white' size="50"/>
            <p>Humidity: {humid}</p>
          </div>
          <div className="weather-column">
            
            <WiWindy color='white' size="50"/>
            <p>Wind: {wind}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
