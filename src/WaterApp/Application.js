import React, { useState } from "react";
import fetchWeater from "./api/fetchWeater";


const Application = () => {

    const [query,  setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = async (e) => {
        const data = await fetchWeater(query);
            setWeather(data);
            setQuery()
    }
   


    return(
        <div className="main-container">
            <div className="search">
                <input 
                  type="text"
                  className="search"
                  placeholder="search.."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                
                  />
            </div>
            <div className="btn">
                <button onClick={search} type='submit'>Izlash</button>
            </div>
            {weather.main && (
                <div className="city">
                    <div className="info">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                    </div>
                    <div className="details">
                        <h2 className="cityname">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="citytemp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Application;