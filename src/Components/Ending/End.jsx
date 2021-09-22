import React from "react";

function End(props) {
  return (
    <div style={!props.state ? { display: "none" } : null}>
      Wish you a very Happy Birthday, this is Ending Part
    </div>
  );
}

export default End;
