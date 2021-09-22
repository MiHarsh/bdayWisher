import React, { useState, useEffect } from "react";

function Timer(props) {
  let t1 = props.start;

  const [timeLeft, setTimeLeft] = useState(0);

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

  useEffect(() => {
    if (timeLeft < -1 && props.state && t1 !== 0) {
      props.alert(props.pin);
      return;
    }

    const intervalId = setInterval(() => {
      if (t1 !== 0) {
        setTimeLeft(t1 - Date.now());
        setData(returnTimerData(timeLeft));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [t1, timeLeft]);

  return (
    <div style={!props.state ? { display: "none" } : null}>
      <div>
        <h1 className="timer-text welcome-text">Time Left for the Event to Start</h1>
      </div>
      <div className="timer-wrapper">
        <div className="time-wrapper">
          <div className="time" id="days">
            {data.days}
          </div>
        </div>
        <div className="time-colon">:</div>
        <div className="time-label">Days</div>
        <div className="time-wrapper">
          <div className="time" id="hours">
            {data.hours}
          </div>
        </div>
        <div className="time-colon">:</div>
        <div className="time-label">Hours</div>
        <div className="time-wrapper">
          <div className="time" id="minutes">
            {data.minutes}
          </div>
        </div>
        <div className="time-colon">:</div>
        <div className="time-label">Minutes</div>
        <div className="time-wrapper">
          <div className="time" id="seconds">
            {data.seconds}
          </div>
        </div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
}

export default Timer;
