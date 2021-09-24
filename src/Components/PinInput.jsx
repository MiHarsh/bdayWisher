import React, { useState } from "react";
import PinInput from "react-pin-input";

function PinInputUser(props) {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);

  function showPin() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  return (
    <div style={props.style}>
      <div className="get-center">
        <div>
          <h1 className="welcome welcome-text" style={{ fontSize: "45px" }}>
            Please Enter a pin to proceed
          </h1>
        </div>
        <div>
          <p style={{ fontSize: "14px" }}>
            Please Enter it carefully, since the event wont be accessbile
            without this pin
          </p>
        </div>
      </div>
      <div className="pinInput">
        <PinInput
          length={5}
          initialValue=""
          secret={!show}
          focus
          type="numeric"
          style={{ padding: "10px" }}
          inputStyle={{ borderColor: "green" }}
          inputFocusStyle={{ borderColor: "darkgreen" }}
          onComplete={(value, index) => {
            props.alert(value);
            setBtn(false);
          }}
        />
        <div
          className="btn input-btn"
          style={{ left: "1rem" }}
          type="button"
          onClick={showPin}
        >
          Show
        </div>
        <button
          style={btn ? { display: "none" } : null}
          className="btn input-btn"
          type="button"
          onClick={props.onClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PinInputUser;
