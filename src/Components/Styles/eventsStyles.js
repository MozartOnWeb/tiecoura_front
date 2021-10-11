//Import Styled cpmponents
import styled from "styled-components";

// Import styled breakpoint
import { down } from "styled-breakpoints";

export const EventWrapper = styled.div`
  font-family: ${(props) => props.theme.mainFont};
  margin-top: 0px;
  color: ${(props) => props.theme.white};
  margin: 0px auto;
  margin-bottom: 110px;
  width: 80%;
  position: relative;
  box-sizing: border-box;

  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }
`;

export const EventHeadline = styled.h1`
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.black};
  font-family: ${(props) => props.theme.linkFont};
  margin-bottom: 35px;
  ${down("md")} {
    font-size: 22px;
  }
`;

export const EventContainer = styled.div`
  margin-bottom: 70px;
  box-sizing: border-box;
  ${down("md")} {
    width: 80%;
    margin: 0 auto;
  }
  ${down("s")} {
    width: 78%;
    margin: 0 auto;
  }
`;

export const SingleEvent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161616;

  border-radius: 15px;
  .link {
    padding-bottom: 15px;
    a {
      margin: 0px 60px;
      font-size: 13px;
      text-transform: uppercase;
      color: ${(props) => props.theme.red};
      word-spacing: 2.5px;
      font-weight: normal;
      position: relative;
      transition: 0.5s ease-in-out 0.3s;
      ${down("s")} {
        font-size: 12px;
        margin: 0px 50px;
      }
      &:hover {
        color: ${(props) => props.theme.white};
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const EventInfos = styled.div`
  padding: 10px;
  h2 {
    font-size: 16px;
    color: ${(props) => props.theme.red};
    margin: 5px 0;
  }
  p {
    text-transform: capitalize;
    margin: 5px 0;
    opacity: 0.7;
    font-weight: lighter;
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`;
