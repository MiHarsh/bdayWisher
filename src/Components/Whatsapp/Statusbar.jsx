import React from "react";

function Statusbar(props) {
  return (
    <div className="status-bar">
      <div className="time">{props.time}</div>
      <div className="battery">
        <i className="zmdi zmdi-battery"></i>
      </div>
      <div className="network">
        <i className="zmdi zmdi-network"></i>
      </div>
      <div className="wifi">
        <i className="zmdi zmdi-wifi-alt-2"></i>
      </div>
      <div className="star">
        <i className="zmdi zmdi-star"></i>
      </div>
    </div>
  );
}

export default Statusbar;
