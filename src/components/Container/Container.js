import "./Container.css";
import Menu from "../Menu/Menu";
import Form from "../Form/Form";
import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";

export default function Container() {
  const CITIES = ["Valencia", "Madrid", "Barcelona", "Sevilla", "Murcia"];

  return (
    <div className="Container">
      <Menu Cities={CITIES} />
      <Form />
      <Current />
      <Forecast />
    </div>
  );
}
