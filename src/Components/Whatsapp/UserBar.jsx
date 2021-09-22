import React from "react";

function UserBar(props) {
  return (
    <div className="user-bar">
      <div className="back">
        <i className="zmdi zmdi-arrow-left"></i>
      </div>
      <div className="avatar">
        <img
          src={props.userData.photosLink["file_0"]}
          height="36px"
          width="36px"
          alt=""
        />
      </div>
      <div className="name">
        <span>{props.userData.userName}</span>
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
