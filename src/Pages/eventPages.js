import React, { useEffect, useState } from "react";

// Import NavLinks
import { NavLink, useRouteMatch } from "react-router-dom";

// Import firestore
import { fs } from "../firebase/config";

// Import Styles
import {
  EventsWrapper,
  EventContainer,
  EventNames,
  EventImage,
  EventInfos,
  EventDesc,
  SingleName,
} from "./Styles/eventPagesStyles";

// Import custom arrows
import { NextArrow, PrevArrow } from "../Components/CustomArrows";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventPages = () => {
  const [eventNames, setEventNames] = useState([]);
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [desc, setDesc] = useState("");

  const match = useRouteMatch("/events/:event");
  const { event } = match.params;

  useEffect(() => {
    let mounted = true;

    fs.collection("Actualities")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        if (mounted) {
          setEventNames(tempNames);
        }
      });

    fs.collection("Actualities")
      .doc(event)
      .get()
      .then((doc) => {
        if (doc.exists && mounted) {
          setImage(doc.data().image);
          setDesc(doc.data().desc);
          setHour(doc.data().hour);
          setLocation(doc.data().location);
          setDate(doc.data().date);
        }
      });

    return () => {
      mounted = false;
    };
  }, [event]);

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
          slidesToScroll: 3,
          slidesToShow: 3,
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

  return (
    <>
      <EventNames>
        <Slider {...setting}>
          {eventNames.map(({ name, id }) => (
            <SingleName key={name}>
              <NavLink activeClassName="active" to={`/events/${id}`}>
                {name}
              </NavLink>
            </SingleName>
          ))}
        </Slider>
      </EventNames>
      <EventsWrapper>
        <EventContainer>
          <EventImage>
            <img src={image} alt="img" />
          </EventImage>

          <EventInfos>
            <p>
              <span>Lieu</span> : {location}
            </p>
            <p>
              <span>Date</span> : {date}
            </p>
            <p>
              <span>Heures</span> : {hour}
            </p>
          </EventInfos>

          <EventDesc>
            <hr />
            {desc}
          </EventDesc>
        </EventContainer>
      </EventsWrapper>
    </>
  );
};

export default EventPages;
