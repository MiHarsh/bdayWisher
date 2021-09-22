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
    photosLink: [],
    AudioLink: "",
    message: "",
    scheduledStart: 0,
    userName: "",
  });

  // const [userData, setUserData] = useState({
  //   eventName: "xH9o72iwwqB",
  //   photosLink: {
  //     file_0:
  //       "https://firebasestorage.googleapis.com/v0/b/bdaywisher15.appspot.com/o/users%2FxH9o72iwwqB%2Fphotos%2Ffile_0?alt=media&token=9f0aa654-798f-4258-9f49-2f88c8604f2a",
  //     file_1:
  //       "https://firebasestorage.googleapis.com/v0/b/bdaywisher15.appspot.com/o/users%2FxH9o72iwwqB%2Fphotos%2Ffile_1?alt=media&token=f7b4681e-ad51-4134-aebd-7a26d46da366",
  //     file_2:
  //       "https://firebasestorage.googleapis.com/v0/b/bdaywisher15.appspot.com/o/users%2FxH9o72iwwqB%2Fphotos%2Ffile_2?alt=media&token=4b962691-5a32-46e4-9bab-848803936c8e",
  //   },
  //   AudioLink: {
  //     file_0:
  //       "https://firebasestorage.googleapis.com/v0/b/bdaywisher15.appspot.com/o/users%2FxH9o72iwwqB%2Faudio%2Ffile_0?alt=media&token=1e795a33-ff92-4254-8a9e-6705b9ac927a",
  //   },
  //   message:
  //     "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>",
  //   scheduledStart: 1632244148155,
  //   userName: "eef",
  // });

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
              return { ...prev, timer: false }; // when timer stops
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
