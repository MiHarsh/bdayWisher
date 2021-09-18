import React, { useState } from "react";
import PinInputUser from "./PinInput";

function Welcome(props) {
  const [pin, setPin] = useState("");
  // const [hide, setHide] = useState(false);
  const [hidepin, setPinHide] = useState(true);

  function getPinFromUser(data) {
    setPin(data);
    console.log(data);
  }

  return (
    <div style={props.style}>
      <div style={!hidepin ? { display: "none" } : null}>
        <div className="ques-text">Hi there</div>
        <div>Blah blah blah Welcome Text</div>
        <div
          className="btn btn-secondary"
          type="button"
          onClick={() => setPinHide(false)}
        >
          Next
        </div>
      </div>

      <div style={hidepin ? { display: "none" } : null}>
        <div>Enter Secret Pin</div>
        <PinInputUser alert={getPinFromUser} />
        <p>
          Please Enter it carefully, since the event wont be accessbile without
          this pin
        </p>

        <div
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            if (pin === "") {
              alert("Please Enter a Valid Pin");
              return null;
            }
            setPinHide(true);
            return props.alert(pin, props.curr, props.next);
          }}
        >
          Create
        </div>
      </div>
    </div>
  );
}

export default Welcome;
