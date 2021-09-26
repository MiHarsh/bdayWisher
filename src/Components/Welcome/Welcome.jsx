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
    <div style={props.style} className="text-css">
      <div style={!hide1 ? { display: "none" } : null}>
        <div style={{ fontSize: "32px", width: "800px" }} className="shade">
          <span>
            Are you tired of the so-called oneliner-
            <span style={{ fontSize: "30px" }}>"Happy Birthday"</span> or
            thinking to make it memorable but stuck with no ideas?
          </span>
          <hr />
          <span>Try out bDayWisher</span>
        </div>

        <div
          className="btn input-btn"
          type="button"
          onClick={() => setHide1(false)}
        >
          Next
        </div>
      </div>

      <div style={hide1 || !hide2 ? { display: "none" } : null}>
        <div className="shade" style={{ fontSize: "40px" }}>
          So Who's Birthday It is?
        </div>
        <BDayName alert={cbName} />
      </div>

      <PinInputUser
        style={hide1 || hide2 ? { display: "none" } : null}
        alert={getPinFromUser}
        onClick={handleSubmit}
      />

      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
}

export default Welcome;
