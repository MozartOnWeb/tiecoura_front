import styled from "styled-components";
import { down } from "styled-breakpoints";

export const WhoWrapper = styled.div`
  width: 80%;
  padding: 50px 10px;
  margin: 0 auto;
  position: relative;
  color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 70px;
`;

export const WhoInfoWrapper = styled.div`
  margin-top: 50px;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 2;
  ${down("md")} {
    flex-direction: column-reverse;
    margin-top: 30px;
  }
`;

export const WhoHeadline = styled.h1`
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 auto;
  font-family: ${(props) => props.theme.linkFont};
  ${down("md")} {
    font-size: 22px;
  }
`;

export const WhoInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 400px;
  ${down("md")} {
    align-items: center;
    width: 100%;
    margin-top: 50px;
  }
  a {
    color: ${(props) => props.theme.black};
    svg {
      top: -60%;
      path {
        fill: ${(props) => props.theme.black};
      }
    }
    &::after {
      border-color: ${(props) => props.theme.black};
    }

    &:hover {
      color: ${(props) => props.theme.red};
      svg path {
        fill: ${(props) => props.theme.red};
      }
      &::after {
        border-color: ${(props) => props.theme.red};
      }
    }
    top: 30px;
    right: 0px;
    ${down("md")} {
      right: 0px;
    }
  }
`;

export const WhoSubline = styled.h3`
  font-family: ${(props) => props.theme.linkFont};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  ${down("md")} {
    margin: 0px;
  }
`;

export const WhoParagraphe = styled.p`
  text-align: left;
  line-height: 20px;
  font-family: ${(props) => props.theme.mainFont};
  font-size: 14px;
  ${down("md")} {
    text-align: center;
  }
  ${down("s")} {
    font-size: 12px;
  }
`;

export const WhoImage = styled.div`
  height: 250px;
  width: 250px;
  position: relative;
  text-align: left;

  ${down("md")} {
    height: 250px;
    width: 250px;
  }
  svg {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 290px;
    height: 280px;
    z-index: -1;
  }

  div {
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  img,
  video {
    z-index: 1;
    cursor: pointer;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .introducing2 {
    height: 250px;
  }
`;
