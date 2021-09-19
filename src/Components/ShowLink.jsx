import React from "react";

function ShowLink(props) {
  return (
    <div style={props.style}>
      <div>
        Copy this link {props.link}- It will ask the pin which you have entered
      </div>
      <i className="fa fa-clipboard btn btn-secondary" aria-hidden="true"></i>
      <div
        className="btn btn-secondary"
        type="button"
        onClick={() => props.alert(null, props.curr, props.next)}
      >
        Next
      </div>
    </div>
  );
}

export default ShowLink;
