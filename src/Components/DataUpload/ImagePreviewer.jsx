import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function ImagePreviewer(props) {
  return (
    <div style={props.paths.length === 0 ? { display: "none" } : null}>
      <AliceCarousel className="img-caraousal" autoPlay autoPlayInterval="3000">
        {props.paths.map((imgsrc, index) => {
          return (
            <img
              alt="Preview"
              key={index}
              src={imgsrc}
              className="sliderimg"
              draggable="false"
            />
          );
        })}
      </AliceCarousel>
    </div>
  );
}

export default ImagePreviewer;
