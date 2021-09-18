import React, { useState } from "react";
import PinInput from "react-pin-input";

function PinInputUser(props) {
  const [show, setShow] = useState(false);

  function showPin() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  return (
    <div>
      <PinInput
        length={5}
        initialValue=""
        secret={!show}
        focus
        type="numeric"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "red" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value, index) => {
          props.alert(value);
        }}
      />
      <div className="btn btn-secondary" type="button" onClick={showPin}>
        Show
      </div>
    </div>
  );
}

export default PinInputUser;
