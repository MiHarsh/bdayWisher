import React, { useState } from "react";
import RichTextEditor from "react-rte";

function TextEditor(props) {
  const [value, setValue] = useState({
    value: RichTextEditor.createEmptyValue(),
  });
  const [errorMessage, setErrorMessage] = useState("");

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
      .then((response) => {
        if (response.status === 200) {
          props.alert(null, props.curr, props.next);
        } else {
          setErrorMessage("Some Error Occured while saving!");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }

        return response.text();
      })
      // .then((response) => {
        // console.log("sent", response);
      // });
  }

  return (
    <section style={{ maxWidth: "707px", ...props.style }} className="">
      <RichTextEditor value={value.value} onChange={onChange} />
      <hr />
      <div className="btn input-btn" type="button" onClick={handleSubmit}>
        Upload Text
      </div>
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </section>
  );
}

export default TextEditor;
