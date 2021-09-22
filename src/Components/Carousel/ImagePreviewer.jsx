import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function ImagePreviewer(props) {
  return (
    <div style={props.paths.length === 0 ? { display: "none" } : null}>
      <AliceCarousel
        className="img-caraousal"
        infinite
        autoPlay
        autoPlayInterval="2000"
        autoPlayDirection="rtl"
        disableDotsControls="true"
      >
        {props.paths.map((imgsrc, index) => {
          return (
            <img
              alt="Preview"
              key={index}
              src={imgsrc}
              className="sliderimg rotateimg180 img-caraousal-img"
              draggable="false"
              align="center"
              vertical-align="middle"
            />
          );
        })}
      </AliceCarousel>
    </div>
  );
}

export default ImagePreviewer;
