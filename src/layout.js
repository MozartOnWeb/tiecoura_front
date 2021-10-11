import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 1140px;
  margin: 25px auto;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
`;

export const Arrow = styled(motion.div)`
  position: absolute;

  svg {
    width: 30px;
    ${down("md")} {
      width: 25px;
    }
  }

  ${(props) =>
    props.bottom &&
    css`
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, -50%);
      svg path {
        fill: ${(props) => props.theme.white};
      }
    `}

  ${(props) =>
    props.bottom2 &&
    css`
      position: relative;
      margin-top: 15px;
      svg path {
        fill: ${(props) => props.theme.white};
      }
    `}

  ${(props) =>
    props.top &&
    css`
      left: 49%;
      top: 3%;
      transform: translate(-50%, -50%);
      transform: rotate(180deg);
      ${down("md")} {
        left: 49%;
      }
      ${down("sm")} {
        left: 47%;
      }
    `}

  ${(props) =>
    props.red &&
    css`
      svg path {
        fill: ${(props) => props.theme.red};
      }
      svg {
        transform: translate(-30%, -50%);
      }
    `}
`;

export const Button = styled(NavLink)`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  transition: 0.5s ease-in-out 0.3s;
  svg {
    position: absolute;
    top: -55%;
    left: 110%;
    width: 15px;
    transform: rotate(-90deg);
    path {
      transition: 0.5s ease-in-out 0.3s;
      fill: ${(props) => props.theme.white};
    }
  }

  ${(props) =>
    props.center &&
    css`
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      ${down("xs")} {
        left: 35%;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 16px;
      letter-spacing: 1.5px;
      font-weight: bold;
    `}
    
  ${(props) =>
    props.medium &&
    css`
      font-size: 22px;
      letter-spacing: 1.5px;
      font-weight: bold;
    `}

  ${(props) =>
    props.big &&
    css`
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: bold;
    `}

  ${(props) =>
    props.welcome &&
    css`
      font-size: 30px;
      letter-spacing: 2px;
      font-weight: bold;
      cursor: pointer;
    `}

  ${(props) =>
    props.social &&
    css`
      font-size: 11.5px;
      letter-spacing: 1.4px;
      font-weight: 400;
      color: ${(props) => props.theme.white};
    `}


  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.white};
    transition: 0.5s ease-in-out 0.3s;
  }

  &:hover {
    /* -webkit-text-stroke: 1px ${(props) => props.theme.white};
    -webkit-text-fill-color: transparent; */
    color: ${(props) => props.theme.red};
    svg path {
      fill: ${(props) => props.theme.red};
    }
    &::after {
      border-color: ${(props) => props.theme.red};
    }
  }

  /* ${down("sm")} {
    &:hover {
      -webkit-text-stroke: inherit;
      -webkit-text-fill-color: inherit;
    }
  } */
`;
export const Button2 = styled(NavLink)`
  color: ${(props) => props.theme.red};
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  svg {
    position: absolute;
    top: -55%;
    left: 110%;
    width: 15px;
    transform: rotate(-90deg);
    path {
      fill: ${(props) => props.theme.red};
    }
  }

  ${(props) =>
    props.welcome &&
    css`
      font-size: 30px;
      letter-spacing: 2px;
      font-weight: bold;
      cursor: pointer;
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.red};
  }
`;

export const Submit = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
  color: ${(props) => props.theme.red};
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  svg {
    position: absolute;
    top: -55%;
    left: 110%;
    width: 15px;
    transform: rotate(-90deg);
    path {
      fill: ${(props) => props.theme.red};
    }
  }

  ${(props) =>
    props.center &&
    css`
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.medium &&
    css`
      font-size: 22px;
      letter-spacing: 1.5px;
      font-weight: bold;
    `}

  ${(props) =>
    props.white &&
    css`
      color: ${(props) => props.theme.white};
      transition: 0.5s ease-in-out 0.3s;
      svg path {
        fill: ${(props) => props.theme.white};
        transition: 0.5s ease-in-out 0.3s;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0px;
        border-width: 0 0 1px;
        border-style: solid;
        border-color: ${(props) => props.theme.white} !important;
        transition: 0.5s ease-in-out 0.3s;
      }

      &:hover {
        color: ${(props) => props.theme.red};
        svg path {
          fill: ${(props) => props.theme.red};
        }
        &::after {
          border-color: ${(props) => props.theme.red} !important;
        }
      }
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.red};
  }
`;

export const Pages = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  padding: 50px 10px;
  position: relative;
  display: block;
  background-color: ${(props) => props.theme.black};
  z-index: 100;
`;
