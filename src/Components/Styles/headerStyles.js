import styled from "styled-components";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.div)`
  position: absolute;
  width: 100vw;
  ${down("xs")} {
    height: 90px;
  }
`;

export const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    z-index: 99;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover {
      .svg1 {
        path {
          fill: ${(props) => props.theme.red};
        }
      }
    }
    .svg1 {
      width: 25px;
      cursor: pointer;
      path {
        transition: 0.7s ease-in-out 0.3s;
        fill: ${(props) => props.theme.white};
      }
      ${down("xs")} {
        width: 18px;
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
    }
    ${down("md")} {
      margin-right: 50px;
    }
    ${down("sm")} {
      margin-right: 50px;
    }
  }
`;

export const Logo = styled(motion.h2)`
  z-index: 99;
  cursor: pointer;
  font-family: ${(props) => props.theme.mainFont};
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  ${down("md")} {
    font-size: 20px;
    margin-left: 30px;
  }
  ${down("sm")} {
    font-size: 20px;
    margin-left: 20px;
  }
`;
