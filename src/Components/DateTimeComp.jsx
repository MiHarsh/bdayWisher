import React, { useState } from "react";
import DateTime from "./DateTime";

function DateTimeComp(props) {
  const [date, setDate] = useState({
    start: Date.parse(new Date()),
    end: Date.parse(new Date()),
  });

  function cb(time, name) {
    setDate((prev) => {
      let temp = {};
      temp[name] = time;
      return {
        ...prev,
        ...temp,
      };
    });
  }

  function handleSubmit() {
    fetch("/saveDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(date),
    })
      .then((response) => response.text())
      .then((response) => console.log("sent", response));
    return props.alert(null, props.curr, props.next);
  }

  return (
    <div style={props.style}>
      <DateTime alert={cb} name="start" />
      <DateTime alert={cb} name="end" />
      <div className="btn btn-secondary" type="button" onClick={handleSubmit}>
        Create Event
      </div>
    </div>
  );
}

export default DateTimeComp;
