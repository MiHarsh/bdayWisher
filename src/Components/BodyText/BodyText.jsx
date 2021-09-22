import React from "react";
import Typist from "react-typist";

function BodyText(props) {
  return (
    <div style={!props.state ? { display: "none" } : null} className="welcome">
      <div className="welcome-text">
        {props.state ? (
          <article>
            <Typist
              avgTypingDelay={100}
              onTypingDone={() =>
                setTimeout(() => {
                  props.cb(null, props.curr, props.next);
                }, 4000)
              }
            >
              <h1>But then I realised,</h1>
              <Typist.Delay ms={30} />
              <h1>I need to do something special,</h1>
              <Typist.Delay ms={30} />
              <h1 style={{ fontSize: "20vh" }}>because</h1>
              <Typist.Delay ms={30} />
              <h1>
                you are <span style={{ fontSize: "15vh" }}> special</span>
              </h1>
            </Typist>
          </article>
        ) : null}
      </div>
    </div>
  );
}

export default BodyText;
