import Carousel from "nuka-carousel";
import React from "react";
import info1 from "../../public/info1.jpg";
import info2 from "../../public/info2.jpg";
import info3 from "../../public/info3.jpg";
import info4 from "../../public/info4.jpg";
import iconNext from "../../public/icon/next.png";
import iconBack from "../../public/icon/back.png";
const SectionInfo = () => {
  return (
    <section
      className="container mt-5 d-flex align-items-center pe-0"
      style={{ height: "70vh" }}
    >
      <div className="row h-100 w-100 align-items-center">
        <div className="col-lg-6 col-12 d-flex flex-column column-gap-3 pe-3">
          <h2 className="fs-1 card-info-title">
            INDONESIA merupakan negara yang terdiri dari
          </h2>
          <div className="row mt-4 column-gap-3 row-gap-4 ms-1 card-info-container">
            <div className="card-info col-5 border border-secondary rounded-3 d-flex align-items-center justify-content-center py-lg-2 py-3">
              <h5 className="fw-medium">17000 Pulau</h5>
            </div>
            <div className="card-info col-5 border border-secondary rounded-3 d-flex align-items-center justify-content-center py-lg-2 py-3">
              <h5 className="fw-medium">5 Pulau Besar</h5>
            </div>
            <div className="card-info col-5 border border-secondary rounded-3 d-flex align-items-center justify-content-center py-lg-2 py-3">
              <h5 className="fw-medium">1340 Suku Bangsa</h5>
            </div>
            <div className="card-info col-5 border border-secondary rounded-3 d-flex align-items-center justify-content-center py-lg-2 py-3">
              <h5 className="fw-medium">6 Agama</h5>
            </div>
          </div>
          <div>
            <a
              href={"#kategori-budaya"}
              className="btn btn-primary mt-4 px-5 py-2 btn-card-info"
            >
              Jelajahi Sekarang
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 mt-4">
          <Carousel
            className="h-100 w-100"
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
            <div className="w-100 card-img-info">
              <img src={info1} alt="" className="w-100 h-100 rounded-4" />
            </div>
            <div className="w-100 card-img-info">
              <img src={info2} alt="" className="w-100 h-100 rounded-4" />
            </div>
            <div className="w-100 card-img-info">
              <img src={info3} alt="" className="w-100 h-100 rounded-4" />
            </div>
            <div className="w-100 card-img-info">
              <img src={info4} alt="" className="w-100 h-100 rounded-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
