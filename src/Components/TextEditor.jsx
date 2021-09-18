import React, { useState } from "react";
import RichTextEditor from "react-rte";

function TextEditor(props) {
  const [value, setValue] = useState({
    value: RichTextEditor.createEmptyValue(),
  });

  function onChange(val) {
    setValue({ value: val });
  }

  return (
    <section style={props.style}>
      <RichTextEditor value={value.value} onChange={onChange} />
      <div
        className="btn btn-secondary"
        type="button"
        onClick={() => props.alert(null, props.curr, props.next)}
      >
        Upload Text
      </div>
    </section>
  );
}

export default TextEditor;
