import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import FadeContent from "../../Reactbits/FadeContent/FadeContent";

import "./wsp-gallery.css";
import "./Galeria.css";

function WSPGallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      <section className="section-image">
        <article className="article-image">
          {galleryImages &&
            galleryImages.map((slide, index) => {
              return (
                <FadeContent
                  blur={true}
                  duration={800}
                  delay={200}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img className="imagenes" src={slide.img} alt="" />
                  </div>
                </FadeContent>
              );
            })}
        </article>
      </section>
    </div>
  );
}

export default WSPGallery;
