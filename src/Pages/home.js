import React, { useState, useEffect } from "react";
import gsap from "gsap";

// Import Components
import {
  Experience,
  Footer,
  Hero,
  Introducing,
  Portfolio,
  WhoIAM,
  Header,
  Events,
} from "../Components";

//
import LoadingScreen from "../Components/LoadingScreen";

const Home = () => {
  const [selected, setSelected] = useState(null);
  const [videoSelected, setVideoSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".load_container", {
        duration: 0.5,
        y: "-100%",
        ease: "Power6.inOut",
        stagger: {
          amount: 0.08,
        },
      });
    }, 4000);
  }, []);

  return (
    <div className="home-wrapper">
      <LoadingScreen />
      <Header />
      <Hero selected={selected} setSelected={setSelected} />
      <Experience selected={videoSelected} setSelected={setVideoSelected} />
      <Portfolio selected={selected} setSelected={setSelected} />
      <Introducing selected={selected} setSelected={setSelected} />
      <WhoIAM selected={selected} setSelected={setSelected} />
      <Events />
      <Footer selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Home;
