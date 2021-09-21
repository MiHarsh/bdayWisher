import React, { useState } from "react";

function Timer() {
  let t1 = Date.now() + 10000;

  const [data, setData] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function returnTimerData(diff) {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff = diff % (1000 * 60 * 60 * 24);

    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff = diff % (1000 * 60 * 60);

    let minutes = Math.floor(diff / (1000 * 60));
    diff = diff % (1000 * 60);

    let seconds = Math.floor(diff / 1000);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }

  function handleClick() {
    const intervalCal = setInterval(() => {
      let currData = returnTimerData(Math.abs(Date.now() - t1));
      setData(currData);
      if (
        currData.days === "00" &&
        currData.hours === "00" &&
        currData.minutes === "00" &&
        currData.seconds === "00"
      ) {
        clearInterval(intervalCal);
      }
    }, 1000);
  }

  return (
    <div>
      {(window.onload = handleClick)}

      <div class="timer-wrapper">
        <div class="time-wrapper">
          <div class="time" id="days">
            {data.days}
          </div>
        </div>
        <div class="time-colon">:</div>
        <div class="time-label">Days</div>
        <div class="time-wrapper">
          <div class="time" id="hours">
            {data.hours}
          </div>
        </div>
        <div class="time-colon">:</div>
        <div class="time-label">Hours</div>
        <div class="time-wrapper">
          <div class="time" id="minutes">
            {data.minutes}
          </div>
        </div>
        <div class="time-colon">:</div>
        <div class="time-label">Minutes</div>
        <div class="time-wrapper">
          <div class="time" id="seconds">
            {data.seconds}
          </div>
        </div>
        <div class="time-label">Seconds</div>
      </div>
    </div>
  );
}

export default Timer;
