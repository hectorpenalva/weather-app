import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input className="countrySearch" type="text" name="search" />
        <button className="seachButton">SEARCH</button>
      </form>
    </div>
  );
}
