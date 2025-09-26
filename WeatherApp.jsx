import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 37.61,
        temp:33.64,
        tempMin:33.64,
        tempMax:33.64,
        humidity:50,
        weather:"light rain",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Saurabh</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo} />
        </div>
    );
}