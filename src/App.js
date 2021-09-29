import "./App.css";
import React, { useState } from "react";
import Timer from "./Components/Timer/Timer";
import PinInput from "./Components/Pin/PinInput";

import Welcome from "./Components/Welcome/Welcome";
import Card from "./Components/Card/Card";

import BodyText from "./Components/BodyText/BodyText";

import Whatsapp from "./Components/Whatsapp/Whatsapp";
import HBD from "./Components/HBD/HBD";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [pin, setPin] = useState("");

  const [disp, setDisp] = useState({
    pininput: true,
    timer: false,
    welcome: false,
    whatsapp: false,
    bodytext: false,
    hbd: false,
    card: false,
  });

  const [userData, setUserData] = useState({
    eventName: "",
    photosLink: {},
    AudioLink: {},
    message: "",
    scheduledStart: 0,
    userName: "",
  });

  function getDetails(pin) {
    // console.log("entered", pin);
    setPin(pin);

    setDisp((prev) => {
      return { ...prev, timer: false }; // when timer stops
    });

    let params = new URL(document.location).searchParams;
    let eventName = params.get("id");
    console.log(eventName);

    fetch("/fetchData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: eventName,
        pin: pin,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          setErrorMessage("Some Error While Fetching, please try again");
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        }

        return response.json();
      })
      .then((response) => {
        if (response.error) {
          setErrorMessage(response.error);
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        } else {
          if (Object.keys(response).length === 1) {
            // Event hasnt started
            setUserData((prev) => {
              return {
                ...prev,
                scheduledStart: response.scheduledStart,
              };
            });
            setDisp((prev) => {
              return { ...prev, timer: true, pininput: false }; // when timer stops
            });
          } else {
            setUserData(response);
            callback(null, "pininput", "welcome");
          }
        }
        console.log("sent", response);
      });
  }

  function callback(data, curr, next) {
    setDisp((prev) => {
      let temp = {};
      temp[curr] = false;
      temp[next] = true;
      return {
        ...prev,
        ...temp,
      };
    });
  }

  return (
    <div className="App">
      {errorMessage && <p className="error"> {errorMessage} </p>}

      <PinInput
        alert={getDetails}
        state={disp.pininput}
        cb={callback}
        curr="pininput"
        next="timer"
      />
      <Timer
        start={userData.scheduledStart}
        state={disp.timer}
        pin={pin}
        alert={getDetails}
      />
      <Welcome
        state={disp.welcome}
        cb={callback}
        curr="welcome"
        next="whatsapp"
      />

      <Whatsapp
        state={disp.whatsapp}
        cb={callback}
        curr="whatsapp"
        next="bodytext"
        userData={userData}
      />
      <BodyText
        state={disp.bodytext}
        cb={callback}
        curr="bodytext"
        next="hbd"
      />
      <HBD
        state={disp.hbd}
        cb={callback}
        curr="hbd"
        next="card"
        userData={userData}
      />

      <Card
        state={disp.card}
        cb={callback}
        curr="card"
        next="end"
        userData={userData}
      />
    </div>
  );
}

export default App;
