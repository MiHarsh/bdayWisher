import React, { useState } from "react";
import RichTextEditor from "react-rte";

function TextEditor(props) {
  const [value, setValue] = useState({
    value: RichTextEditor.createEmptyValue(),
  });

  function onChange(val) {
    setValue({ value: val });
  }

  function handleSubmit() {
    let message = value.value.toString("html");

    fetch("/saveText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => response.text())
      .then((response) => console.log("sent", response));
    return props.alert(null, props.curr, props.next);
  }

  return (
    <section style={props.style}>
      <RichTextEditor value={value.value} onChange={onChange} />
      <div className="btn btn-secondary" type="button" onClick={handleSubmit}>
        Upload Text
      </div>
    </section>
  );
}

export default TextEditor;
