import React from "react";
import ImagePreviewer from "../Carousel/ImagePreviewer";

function Card(props) {
  let pths = [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300.jpg",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
  ];

  return (
    <div className="card-c" style={!props.state ? { display: "none" } : null}>
      <div className="back">
        <ImagePreviewer paths={pths} />
      </div>
      <div className="front">
        <div className="cover-shape-large">
          <img alt="" src="./bdayCake.png" style={{ height: "100%" }} />
        </div>
      </div>

      <div className="text-container message-c">
        <div className="Fullcard" id="thumbnail">
          <div className="Cardcontent">
            <div className="cardtext">
              <h1>
                <i className="fa fa-birthday-cake" aria-hidden="true"></i>Happy
                Birthday<i className="fa fa-glass" aria-hidden="true"></i>
                <br />
                <i className="fa fa-star-o" aria-hidden="true"></i>Mugala Doreen
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </h1>
              <hr />
              <p>Hey D,</p>
              <p></p>
              <p>
                May your heart rejoice in knowing that, on this day the world
                became a brighter, blessed, more beautiful place because you
                were born...
              </p>
              <p>
                The life of a person is measured not with the years, but with
                the footprint that he leaves in other people's lives, thoughts
                and hearts.
              </p>
              <p>
                I wish you every happiness your heart can hold. Here's to
                another fabulous year of life!.
              </p>
              You're simply the best.
              <br />
              LiveOutLoud! Celebrate! Wuhuuuu! Yayyyyyyy!
              <p>
                Patrick<i className="fa fa-smile-o" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
