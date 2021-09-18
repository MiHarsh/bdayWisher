import React from "react";

function BDayName(props) {
  function handleSubmit(e) {
    e.preventDefault();
    return props.alert(e.target[0].value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id={props.name} name={props.name} required />

      <button>Submit</button>
    </form>
  );
}

export default BDayName;
