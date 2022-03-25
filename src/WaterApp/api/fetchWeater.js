import React from "react";
import axios from "axios";


const fetchWeater = async (query) => {

    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "a34eba53fa321d9b363a23175ffb8242";

    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key
        }
    });

    return data
}

export default fetchWeater
