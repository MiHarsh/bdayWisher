import React, { useEffect } from "react";

function Welcome(props) {
  useEffect(() => {
    let effect = window.onload;
    effect();
    setTimeout(() => {
      if (props.state) {
        props.cb(null, props.curr, props.next);
      }
    }, 8000);
  }, [props.state]);

  return (
    <div className="welcome" style={!props.state ? { display: "none" } : null}>
      <canvas id="c"></canvas>
      <div className="welcome-text">
        <h1
          style={{
            fontSize: "100px",
          }}
        >
          Hey, It's your Birthday.
        </h1>

        <h1> Welcome to the new Journey of Your Life</h1>
      </div>
    </div>
  );
}

export default Welcome;
