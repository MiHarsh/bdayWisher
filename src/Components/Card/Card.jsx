import React from "react";
import ImagePreviewer from "../Carousel/ImagePreviewer";
import Interweave from "interweave";

function Card(props) {
  let pths = Object.values(props.userData.photosLink);

  function playAudio() {
    let aud = document.getElementById("audElement");
    if (aud.duration === 0 || aud.paused) {
      aud.src = props.userData.AudioLink["file_0"];
      aud.play();
    }
  }

  return (
    <div style={!props.state ? { display: "none" } : null}>
      <div className="card-c card-heights">
        <div
          className="back card-heights"
          style={{ backgroundImage: "url(./BACKGROUND.png)" }}
        >
          <ImagePreviewer paths={pths} />
        </div>
        <div className="front card-heights">
          <div className="cover-shape-large">
            <img alt="" src="./bdayCake.png" style={{ height: "100%" }} />
          </div>
        </div>

        <div className="text-container message-c">
          <div className="Fullcard" id="thumbnail">
            <div className="Cardcontent">
              <div className="cardtext">
                <h1>
                  <i className="fa fa-birthday-cake" aria-hidden="true"></i>
                  Happy Birthday
                  <i className="fa fa-glass" aria-hidden="true"></i>
                  <br />
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  {props.userData.userName}
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </h1>
                <hr />
                <Interweave content={props.userData.message} />
                You're simply the best.
                <br />
                LiveOutLoud! Celebrate! Wuhuuuu! Yayyyyyyy!
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio id="audElement">
        <source src={props.userData.AudioLink["file_0"]} />
      </audio>
      <div className="btn challenge-part-of" onClick={playAudio}>
        PlayMe
      </div>
    </div>
  );
}

export default Card;
