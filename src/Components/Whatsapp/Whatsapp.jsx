import React, { useState } from "react";

import Received from "./Received";
import Sent from "./Sent";
import UserBar from "./UserBar";
import Statusbar from "./Statusbar";
import Textinput from "./Textinput";

function Whatsapp(props) {
  const [display, setDisplay] = useState(false);

  function cb() {
    setTimeout(function () {
      let tick = document.querySelector(".tick-animation");
      if (tick) {
        tick.classList.remove("tick-animation");
      }
    }, 500);
    setDisplay(true);
  }

  return (
    <div className="page" style={!props.state ? { display: "none" } : null}>
      <div className="marvel-device nexus5">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>

        <div className="screen">
          <div className="screen-container">
            <Statusbar time="11:56 PM" />

            <div className="chat">
              <div className="chat-container">
                <UserBar />
                <div className="conversation">
                  <div className="conversation-container">
                    <Sent
                      message="Did You completed the assignments?"
                      time="11:56 PM"
                    />

                    <Received
                      message="No I haven't, I think tomorrow is the deadline."
                      time="11:56 PM"
                    />

                    <Sent
                      message="Yeah, Okay I'll arrange it."
                      time="11:56 PM"
                    />

                    <Received message="Thanks a lot." time="11:56 PM" />

                    <Sent
                      style={!display ? { display: "none" } : null}
                      message="Happy Birthday"
                      time="12:00 PM"
                      class="tick-animation"
                    />
                  </div>
                  <Textinput alert={cb} state={props.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>That's what I was going to do</div>
    </div>
  );
}

export default Whatsapp;
