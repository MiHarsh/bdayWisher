import React, { useState } from "react";
import PinInput from "react-pin-input";

function PinInputUser(props) {
  const [show, setShow] = useState(false);

  const [pin, setPin] = useState("");
  const [btn, setBtn] = useState(true);

  function showPin() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  return (
    <div style={!props.state ? { display: "none" } : null}>
      <div>
        <h1 className="welcome welcome-text" style={{ fontSize: "40px" }}>
          Please Enter the pin to proceed
        </h1>
      </div>
      <div className="pinInput">
        <PinInput
          length={5}
          initialValue={pin}
          secret={!show}
          focus
          type="numeric"
          style={{ padding: "10px" }}
          inputStyle={{ borderColor: "green" }}
          inputFocusStyle={{ borderColor: "darkgreen" }}
          onComplete={(value, index) => {
            //   props.alert(value);
            setPin(value);
            setBtn(false);
          }}
        />
        <div
          className="btn inputpin-btn"
          style={{ left: "1rem" }}
          type="button"
          onClick={showPin}
        >
          Show
        </div>
        <button
          style={btn ? { display: "none" } : null}
          className="btn inputpin-btn"
          type="button"
          onClick={() => props.alert(pin)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PinInputUser;