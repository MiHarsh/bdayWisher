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
      >
        {props.paths.map((imgsrc, index) => {
          return (
            <img
              alt="Preview"
              key={index}
              src={imgsrc}
              className="sliderimg rotateimg180"
              draggable="false"
            />
          );
        })}
      </AliceCarousel>
    </div>
  );
}

export default ImagePreviewer;
