import React, { useEffect, useState } from "react";

function EventCount(props) {
  const [curD, setCur] = useState("0");

  useEffect(() => {
    if (Number(curD) === props.number) {
      return;
    }

    let id = setInterval(() => {
      setCur(String(Number(curD) + 1));
    }, 70);
    return () => clearInterval(id);
  }, [curD, props.number]);

  return (
    <div className="welcome-wrapper stats-wrapper">
      <div className="stat-wrapper">
        <div className="stat-icon">
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </div>
        <div className="stat-details">
          <div className="stat-numbers">
            {curD.padStart(String(props.number).length + 1, "0")}
          </div>
          <div className="stat-title">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default EventCount;
