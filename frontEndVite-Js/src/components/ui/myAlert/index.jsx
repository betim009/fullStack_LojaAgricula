import { Activity } from "react";
import "./myAlert.css";

export default function MyAlert({ props }) {
  const { style, text, show, handleCloseAlert } = props;

  return (
    <Activity mode={show ? "visible" : "hidden"}>
      <div className={`myAlert ${style}`}>
        <p>{text}</p>
        <button onClick={handleCloseAlert} className="btnClose">
          X
        </button>
      </div>
    </Activity>
  );
}
