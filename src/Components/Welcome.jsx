import React, { useState } from "react";
import PinInputUser from "./PinInput";

import BDayName from "./BDayName";

function Welcome(props) {
  const [userData, setUserData] = useState({
    username: "",
    pin: "",
  });
  // const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [btn, setBtn] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  function getPinFromUser(data) {
    setUserData((prev) => {
      return { ...prev, pin: data };
    });
    setBtn(false);
    console.log(data);
  }

  function cbName(nameUser) {
    setUserData((prev) => {
      return { ...prev, username: nameUser };
    });
    setHide2(false);
    console.log(nameUser);
  }

  function handleSubmit() {
    fetch("/pinAuth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status !== 200) {
          setErrorMessage("Some Error Occured while saving!");
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        }

        return response.text();
      })
      .then((response) => {
        props.alert(response, props.curr, props.next);
        console.log("sent", response);
      });
  }

  return (
    <div style={props.style}>
      <div style={!hide1 ? { display: "none" } : null}>
        <div className="ques-text">Hi there</div>
        <div>Blah blah blah Welcome Text</div>
        <div
          className="btn btn-secondary"
          type="button"
          onClick={() => setHide1(false)}
        >
          Next
        </div>
      </div>

      <div style={hide1 || !hide2 ? { display: "none" } : null}>
        <div>So Who's Birthday It is?</div>
        <BDayName alert={cbName} />
      </div>

      <div style={hide1 || hide2 ? { display: "none" } : null}>
        <div>Enter Secret Pin</div>
        <PinInputUser alert={getPinFromUser} />
        <p>
          Please Enter it carefully, since the event wont be accessbile without
          this pin
        </p>

        <button
          disabled={btn}
          className="btn btn-secondary"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
}

export default Welcome;
