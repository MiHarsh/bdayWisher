import React from "react";

function Received(props) {
  return (
    <div className="message received">
      {props.message}
      <span className="metadata">
        <span className="time">{props.time}</span>
      </span>
    </div>
  );
}

export default Received;
