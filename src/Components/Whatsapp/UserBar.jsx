import React from "react";

function UserBar() {
  return (
    <div className="user-bar">
      <div className="back">
        <i className="zmdi zmdi-arrow-left"></i>
      </div>
      <div className="avatar">
        <img
          src="https://avatars2.githubusercontent.com/u/398893?s=128"
          alt="Avatar"
        />
      </div>
      <div className="name">
        <span>Zeno Rocha</span>
        <span className="status">online</span>
      </div>
      <div className="actions more">
        <i className="zmdi zmdi-more-vert"></i>
      </div>
      <div className="actions attachment">
        <i className="zmdi zmdi-attachment-alt"></i>
      </div>
      <div className="actions">
        <i className="zmdi zmdi-phone"></i>
      </div>
    </div>
  );
}

export default UserBar;
