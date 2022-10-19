import "./Menu.css";
import getWeatherInfo from "../../services/getWeatherInfo";

export default function Menu(props) {
  const { Cities } = props;

  return (
    <div className="Menu">
      {Cities.map((city) => {
        return <button onClick={() => getWeatherInfo(city)}>{city}</button>;
      })}
    </div>
  );
}
