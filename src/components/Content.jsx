import { useState } from "react";

function Content(props) {
  let [isColor, setIsColor] = useState(false);
  function colorChange() {
    setIsColor(true);
  }
  function colorRevert() {
    setIsColor(false);
  }
  return (
    <div className="form-input">
      <form>
        <input
          className="blank"
          type="text"
          name="name"
          onChange={(event) => props.userType(event)}
          value={props.text.name}
        ></input>
        <button
          className="button"
          onMouseOver={colorChange}
          onMouseOut={colorRevert}
          style={isColor ? { background: "yellow" } : { background: "white" }}
          onClick={(event) => {
            props.function();
            event.preventDefault();
          }}
        >
          {props.addOrSave ? "ADD" : "SAVE"}
        </button>
      </form>
    </div>
  );
}
export default Content;
