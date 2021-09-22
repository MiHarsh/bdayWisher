import React from "react";
import ImagePreviewer from "../Carousel/ImagePreviewer";
import Interweave from "interweave";

function Card(props) {
  let pths = Object.values(props.userData.photosLink);

  function playAudio() {
    let aud = new Audio(props.userData.AudioLink["file_0"]);
    aud.play();
  }

  return (
    <div style={!props.state ? { display: "none" } : null}>
      <div className="card-c card-heights">
        <div className="back card-heights">
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
                {/* <p>
                May your heart rejoice in knowing that, on this day the world
                became a brighter, blessed, more beautiful place because you
                were born...
              </p>
              <p>
                The life of a person is measured not with the years, but with
                the footprint that he leaves in other people's lives, thoughts
                and hearts.
              </p> */}
                {/* <p>
                I wish you every happiness your heart can hold. Here's to
                another fabulous year of life!.
              </p> */}
                You're simply the best.
                <br />
                LiveOutLoud! Celebrate! Wuhuuuu! Yayyyyyyy!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn challenge-part-of" onClick={playAudio}>
        PlayMe
      </div>
    </div>
  );
}

export default Card;
