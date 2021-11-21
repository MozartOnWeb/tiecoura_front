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

export const Logo = styled.div`
  z-index: 99;
  cursor: pointer;
  width: 90px;
  height: 90px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${down("md")} {
    width: 50px;
    height: 50px;
  }
  ${down("sm")} {
    width: 30px;
    height: 30px;
  }
`;
