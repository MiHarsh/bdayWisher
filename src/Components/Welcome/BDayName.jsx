import React from "react";

function BDayName(props) {
  function handleSubmit(e) {
    e.preventDefault();
    return props.alert(e.target[0].value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id={props.name}
          name={props.name}
          required
          placeholder="Enter the name"
          style={{ background: "#d1d1d1" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="input-btn">Submit</button>
      </div>
    </form>
  );
}

export default BDayName;
