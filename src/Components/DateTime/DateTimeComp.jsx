import React, { useState } from "react";
import DateTime from "./DateTime";

function DateTimeComp(props) {
  const [date, setDate] = useState({
    start: Date.parse(new Date()),
    end: Date.parse(new Date()),
  });

  const [errorMessage, setErrorMessage] = useState("");

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
      .then((response) => {
        if (response.status === 200) {
          props.alert(null, props.curr, props.next);
        } else {
          setErrorMessage("Some Error Occured while saving!");
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        }

        return response.text();
      })
      .then((response) => console.log("sent", response));
  }

  return (
    <div style={props.style}>
      <div className="get-center">
        <h1>Specify Event Creation and Destruction Time</h1>
        <p>Events would only be accessible between these time period</p>
      </div>
      <div className="dt">
        <DateTime alert={cb} name="start" label="Event Start Time" />
        <DateTime alert={cb} name="end" label="Event End Time" />
      </div>
      <div className="btn input-btn" type="button" onClick={handleSubmit}>
        Create Event
      </div>
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
}

export default DateTimeComp;