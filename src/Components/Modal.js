import React from "react";

// Import styles
import { Backdrop, ModalImg, ImgContainer } from "./Styles/modalStyles";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// Import custom arrows
import { NextArrow2, PrevArrow2 } from "./CustomArrows";

const Modal = ({ selected, setSelected, images }) => {
  const result = images.filter((image) => image.url !== selected);

  const setting2 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    fade: false,
    arrows: true,
    nextArrow: <NextArrow2 />,
    prevArrow: <PrevArrow2 />,
  };

  const clickHandle = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={clickHandle}>
      <ImgContainer>
        <AiOutlineCloseCircle
          onClick={() => setSelected(null)}
          className="svg1"
        />
        <Slider {...setting2}>
          <ModalImg src={selected} alt="" />
          {result.map((image) => (
            <div key={image.name}>
              <ModalImg src={image.url} alt="" />
            </div>
          ))}
        </Slider>
      </ImgContainer>
    </Backdrop>
  );
};

export default Modal;
