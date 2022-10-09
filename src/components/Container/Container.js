import "./Container.css";
import Menu from "../Menu/Menu";
import Form from "../Form/Form";
import Forecast from "../Forecast/Forecast";

export default function Container() {
  return (
    <div className="Container">
      <Menu />
      <Form />
      <Forecast />
    </div>
  );
}
