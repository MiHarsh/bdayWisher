import React, { useState } from "react";

import Received from "./Received";
import Sent from "./Sent";
import UserBar from "./UserBar";
import Statusbar from "./Statusbar";
import Textinput from "./Textinput";
/* Message */

// var form = document.querySelector(".conversation-compose");
// var conversation = document.querySelector(".conversation-container");

// form.addEventListener("submit", newMessage);

// function newMessage(e) {
//   var input = e.target.input;

//   if (input.value) {
//     var message = buildMessage(input.value);
//     conversation.appendChild(message);

//     animateMessage(message);
//   }

//   input.value = "";
//   conversation.scrollTop = conversation.scrollHeight;

//   e.preventDefault();
// }

// function buildMessage(text) {
//   var element = document.createElement("div");

//   element.classList.add("message", "sent");

//   element.innerHTML =
//     text +
//     '<span className="metadata">' +
//     '<span className="time">' +
//     "12:00 AM" +
//     "</span>" +
//     '<span className="tick tick-animation">' +
//     '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
//     '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
//     "</span>" +
//     "</span>";

//   return element;
// }

// function animateMessage(message) {
//   setTimeout(function () {
//     var tick = message.querySelector(".tick");
//     tick.classList.remove("tick-animation");
//   }, 500);
// }

// let msgElement = document.getElementsByClassName("input-msg")[0];
// let sendButton = document.getElementsByClassName("send")[0];
// let mssg = "Happy Birthday";
// let j = 0;

// let typer = setInterval(() => {
//   msgElement.value += mssg.charAt(j);
//   j++;
//   if (j > mssg.length) {
//     sendButton.click();
//     clearInterval(typer);
//   }
// }, 200);

function Whatsapp() {
  const [display, setDisplay] = useState(false);

  function cb() {
    setDisplay(true);
  }

  return (
    <div className="page">
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
                    />
                  </div>
                  <Textinput alert={cb} />
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
