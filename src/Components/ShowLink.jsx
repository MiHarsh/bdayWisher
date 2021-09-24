import React, { useState, useRef } from "react";

function ShowLink(props) {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    var range = document.createRange();
    range.selectNode(textAreaRef.current);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("");
    }, 3000);
  }

  return (
    <div style={props.style}>
      <p className="error">{copySuccess}</p>
      <div className="get-center">
        <div>
          <h1 className="welcome welcome-text" style={{ fontSize: "45px" }}>
            Copy this link
          </h1>
        </div>

        <div ref={textAreaRef}>
          {document.location.href + "user/event?id=" + props.link}
        </div>
        <hr />
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "14px", marginBottom: "1rem" }}>
            Event will be accessbile at the above link
          </p>
        </div>

        <div>
          <i
            className="fa fa-clipboard btn input-btn"
            onClick={copyToClipboard}
            aria-hidden="true"
          ></i>
        </div>
        <div
          className="btn input-btn"
          type="button"
          onClick={() => props.alert(null, props.curr, props.next)}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default ShowLink;
