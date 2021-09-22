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
      <PinInput
        length={5}
        initialValue={pin}
        secret={!show}
        focus
        type="numeric"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "red" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value, index) => {
          //   props.alert(value);
          setPin(value);
          setBtn(false);
        }}
      />
      <div className="btn btn-secondary" type="button" onClick={showPin}>
        Show
      </div>
      <button
        style={btn ? { display: "none" } : null}
        className="btn btn-secondary"
        type="button"
        onClick={() => props.alert(pin)}
      >
        Submit
      </button>
    </div>
  );
}

export default PinInputUser;
