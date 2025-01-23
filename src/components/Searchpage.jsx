import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Homepage from "./Homepage";
import Searchbox from "./Searchbox";

function Searchpage() {
  const query = new URLSearchParams(useLocation().search);
  const searchingWord = query.get("city");

  const [result, setResult] = useState({});

  function getDatas(data) {
    return {
      name: data.name,
      icons: data.weather[0].icon,
      temp: (data.main.temp - 273.15).toFixed(1),
      windSpeed:(data.wind.speed),
      humidity:data.main.humidity,
      main:data.weather[0].main,
      description:data.weather[0].description
    };
  }

  async function getDataFromApi() {
    return await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchingWord +
        "&appid=a7ccf39f58624360e151dce17c818ef3"
    )
      .then((response) => response.json())
      .then((data) => getDatas(data))
      .catch((err) => err);
  }

  useEffect(() => {
    getDataFromApi().then((city) => setResult(city));
  }, []);

  return result.name == "TypeError" ? (
    <Homepage />
  ) : (
    <div
      className="homepage"
      style={{
        backgroundImage: "url(" + "../images/" + result.icons + ".png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Searchbox />

      <div className="card">
        <div className="cityName">{result.name}</div>
        <div className="temp">{result.temp}</div>

        <div className="other">

        <div className="other-results">
        <i class="fas fa-temperature-low"></i>  <span>{result.main}</span>
        </div>

        <div className="other-results">
        <i class="fas fa-smog"></i> <span>{result.description}</span>
        </div>

        <div className="other-results">
          <i class="fas fa-wind"></i> <span>{result.windSpeed}</span>
        </div>

        <div className="other-results">
        <i class="fas fa-water"></i> <span>{result.humidity}</span>
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default Searchpage;
