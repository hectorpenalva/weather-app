import "./Current.css";
import {} from "@iconscout/react-unicons";

export default function Current() {
  return (
    <div className="Current">
      <div className="cityName">Madrid</div>
      <div className="weather">
        <div className="condition">Sunny</div>
        <div className="currentWeatherInfo">
          <div className="conditionIcon">
            <img
              src="https://cdn.weatherapi.com/weather/64x64/day/113.png"
              alt="Condition Icon"
            ></img>
          </div>
          <div className="temperature"> 30º</div>
          <div className="otherInfo">
            <div className="feelsLike">Feels Like: </div>
            <div className="humidity">Humidity: </div>
            <div className="wind">Wind: </div>
          </div>
        </div>
      </div>
    </div>
  );
}
