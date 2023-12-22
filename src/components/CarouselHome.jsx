import React from "react";
import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";
import iconNext from "../../public/icon/next.png";
import iconBack from "../../public/icon/back.png";
import Carousel from "nuka-carousel";
const CarouselHome = () => {
  return (
    <div>
      <Carousel
        wrapAround={true}
        autoplay={true}
        pauseOnHover={false}
        autoplayInterval={3000}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="banner-carousel-render-center-left-controls"
          >
            <img src={iconBack} alt="" className="w-100 h-100" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="banner-carousel-render-center-right-controls"
          >
            <img src={iconNext} alt="" />
          </button>
        )}
      >
        <div className="carousel-home">
          <figure className="position-relative d-flex align-items-center justify-content-center  h-100">
            <img
              src={banner1}
              className="w-100 h-100 object-fit-cover"
              alt=""
            />
            <figcaption className="position-absolute z-3 text-white w-100 h-100 text-center d-flex justify-content-center align-items-center">
              <h2>
                BERSAMA MELESTARIKAN <br /> BUDAYA INDONESIA
              </h2>
            </figcaption>
          </figure>
        </div>
        <div className="carousel-home">
          <figure className="position-relative d-flex align-items-center justify-content-center  h-100">
            <img
              src={banner2}
              className="w-100 h-100 object-fit-cover"
              alt=""
            />
            <figcaption className="position-absolute z-3 text-white w-100 h-100 text-center d-flex justify-content-center align-items-center">
              <h2>
                EXPLORE THE <br /> INDONESIA
              </h2>
            </figcaption>
          </figure>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
