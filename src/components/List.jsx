import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
function List(props) {
  let [isChecked, setIsChecked] = useState(false);
  function checkChange() {
    setIsChecked(!isChecked);
  }
  return (
    <li>
      <input
        className="tick"
        type="checkbox"
        checked={isChecked}
        onChange={checkChange}
      ></input>
      <p>{props.activity}</p>
      <FaRegEdit
        role="button"
        id={props.id}
        onClick={(event) => {
          props.edit(event.target.id);
          event.preventDefault();
        }}
      />
      <MdDeleteOutline
        id={props.id}
        role="button"
        onClick={(event) => {
          props.delete(event.target.id);
          event.preventDefault();
        }}
      />
    </li>
  );
}
export default List;
