import React from "react";

// Import React-Router-Dom
import { Route, Switch, useLocation } from "react-router-dom";

// Import Framer Motion
import { AnimatePresence } from "framer-motion";

// Import Global Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Pages
import { Home, Video, Photo, About, Welcome, EventPages } from "./Pages";
import { CloseMenu, PageNav } from "./Components";
import { Pages } from "./layout";

import { down } from "styled-breakpoints";

// Create Global Styles
const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Poppins";
  }
  html, body {
    overflow-x: hidden;
    .toast_conatiner {
      text-transform: uppercase;
    }
    .pages {
      position: relative;
      ${down("md")} {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
        }
      .menu-close {
      position: absolute;
      right: 135px;
      top: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 200;
      &:hover {
        .svg1 {
          path {
            fill: ${(props) => props.theme.red};
          }
        }
      }
      ${down("md")} {
        margin-right: -50px;
      }
      ${down("sm")} {
        margin-right: -80px;
      }
      .svg1 {
        width: 25px;
        cursor: pointer;
        path {
          fill: ${(props) => props.theme.white};
        transition: 0.7s ease-in-out 0.3s;
        }
        ${down("xs")} {
          width: 18px;
        }
        ${down("s")} {
          width: 16px;
        }
      }
      .svg2 {
        #Ellipse_2 {
          stroke: ${(props) => props.theme.white};
        }
        position: absolute;
        width: 70px;
        cursor: pointer;
        ${down("xs")} {
          width: 60px;
        }
        ${down("s")} {
          width: 55px;
        }
      }
      }
    }
    .home-wrapper {
      height: 100%;
    }
    .red-bg {
      width: 100%;
      height: 100%;
      transform: translateY(-100%);
      position: fixed;
      left: 0;
      top: 0;
      background-color: ${(props) => props.theme.red};
      z-index: 100;
    }
  }
`;

const Theme = {
  mainFont: "Poppins",
  linkFont: "Poppins",
  menuFont: "Jura",
  red: "#E2293F",
  white: "#FFFDFF",
  black: "#161616",

  breakpoints: {
    s: "320px",
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ToastContainer
          autoClose={2000}
          position="bottom-right"
          className="toast_conatiner"
        />
        <Normalize />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route component={Home} path="/home" exact />
            <Route component={Welcome} path="/" exact />
            <Pages className="pages">
              <PageNav />
              <CloseMenu />
              <Route component={Video} path="/videos" />
              <Route component={Photo} path="/photos/:serie" exact />
              <Route component={About} path="/about" />
              <Route component={EventPages} path="/events/:event" />
            </Pages>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
