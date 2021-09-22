import "./App.css";
import React, { useState } from "react";
import Timer from "./Components/Timer/Timer";
import PinInput from "./Components/Pin/PinInput";

import End from "./Components/Ending/End";
import Welcome from "./Components/Welcome/Welcome";
import Card from "./Components/Card/Card";

import BodyText from "./Components/BodyText/BodyText";

import Whatsapp from "./Components/Whatsapp/Whatsapp";
import HBD from "./Components/HBD/HBD";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [pin, setPin] = useState("");

  const [disp, setDisp] = useState({
    pininput: false,
    timer: false,
    welcome: false,
    whatsapp: false,
    bodytext: false,
    hbd: false,
    card: true,
    end: false,
  });

  const [userData, setUserData] = useState({
    eventName: "",
    photosLink: [],
    AudioLink: "",
    message: "",
    scheduledStart: 0,
    userName: "",
  });

  function getDetails(pin) {
    console.log("entered", pin);
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
              return { ...prev, timer: false }; // when timer stops
            });
          } else {
            setUserData(response);
          }
        }
        console.log("sent", response);
      });
  }

  return (
    <div className="App">
      {errorMessage && <p className="error"> {errorMessage} </p>}
      <PinInput alert={getDetails} state={disp.pininput} />
      <Timer
        start={userData.scheduledStart}
        state={disp.timer}
        pin={pin}
        alert={getDetails}
      />
      <Welcome state={disp.welcome} />

      <Whatsapp state={disp.whatsapp} />
      <BodyText state={disp.bodytext} />
      <HBD state={disp.hbd} />

      <Card state={disp.card} />
      <End state={disp.end} />
    </div>
  );
}

export default App;
