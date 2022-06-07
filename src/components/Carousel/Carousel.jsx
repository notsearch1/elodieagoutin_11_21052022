import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Carousel.css";

const Carousel = (props) => {
  const { id } = useParams();

  const dataId = props.data.filter((lease) => lease.id === id);

  const slides = dataId
    .map((slide) => slide.pictures)
    .map((pic) => (pic = pic.length));

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides - 1 : current - 1);
  };

  return (
    <div className="carouselContainer">
      {dataId.map((slide, index) => {
        return slide.pictures.map((pic, index) => (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={pic} alt={pic} className="lease" key={pic} />
            )}
          </div>
        ));
      })}
      <p className="count">
        {current + 1}/{slides[0]}
      </p>
      <div className="maskBannerCarousel"></div>
      {slides[0] !== 1 ? (
        <div className="arrowSlide">
          <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
