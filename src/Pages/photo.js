import React, { useState, useEffect } from "react";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Link
import { NavLink, useRouteMatch } from "react-router-dom";

// Import firestore
import { fs } from "../firebase/config";

// Import LazyLoad
import LazyLoad from "react-lazyload";

// Import custom arrows
import { NextArrow, PrevArrow } from "../Components/CustomArrows";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Components
import {
  PhotoWrapper,
  SeriesName,
  SingleName,
  PhotoImageWrapper,
  SerieInfo,
} from "./Styles/photoStyles";
import Modal from "../Components/Modal";

// Masonry Grid Styles
import Masonry from "react-masonry-css";

const Photo = () => {
  const [serieName, setSerieName] = useState([]);
  const [images, setImages] = useState([]);
  const [serieDesc, setSerieDesc] = useState("");
  const [selected, setSelected] = useState(null);

  const match = useRouteMatch("/photos/:serie");
  const { serie } = match.params;

  useEffect(() => {
    let mounted = true;

    fs.collection("series")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        if (mounted) {
          setSerieName(tempNames);
        }
      });

    fs.collection("series")
      .doc(serie)
      .get()
      .then((doc) => {
        if (doc.exists && mounted) {
          setImages(doc.data().images);
          setSerieDesc(doc.data().desc);
        }
      });

    return () => {
      mounted = false;
    };
  }, [serie]);

  // Slider Settings
  const setting = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: false,
    fade: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToScroll: 2,
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToScroll: 2,
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  };

  // Masonry BreakPoint Settings
  const breakPointColumnObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };

  return (
    <>
      <SeriesName>
        <Slider {...setting}>
          {serieName.map((serie) => (
            <SingleName key={serie.id}>
              <NavLink activeClassName="active" to={`/photos/${serie.id}`}>
                {serie.name}
              </NavLink>
            </SingleName>
          ))}
        </Slider>
      </SeriesName>

      <PhotoWrapper>
        <PhotoImageWrapper>
          <Masonry
            breakpointCols={breakPointColumnObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images &&
              images.map((image) => (
                <LazyLoad height={200} offset={150} key={image.name}>
                  <motion.img
                    src={image.url}
                    alt={image.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => setSelected(image.url)}
                  />
                </LazyLoad>
              ))}
          </Masonry>
        </PhotoImageWrapper>
      </PhotoWrapper>
      <SerieInfo>
        <hr />
        {serieDesc}
      </SerieInfo>
      {selected && (
        <Modal selected={selected} setSelected={setSelected} images={images} />
      )}
    </>
  );
};

export default Photo;
