import styled from "styled-components";
import { only, down } from "styled-breakpoints";

export const IntroduceWrapper = styled.div`
  width: 80%;
  height: 90vh;
  padding: 20px 10px;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 50px;
  margin-top: 70px;
  box-sizing: border-box;
  ${down("md")} {
    width: 100%;
    border-radius: 0px;
  }
  ${down("xs")} {
    height: 100vh;
  }

  p {
    font-family: ${(props) => props.theme.mainFont};
    text-align: center;
    width: 500px;
    font-size: 14px;
    line-height: 25px;
    font-weight: 400;
    ${only("md")} {
      font-size: 13px;
    }
    ${down("xs")} {
      font-size: 13px;
      width: 300px;
    }
  }

  svg {
    width: 22px;
    margin-top: 0px;
    ${down("xs")} {
      position: relative;
    }
  }
`;

export const IntroduceImage = styled.div`
  width: 800px;
  height: 350px;
  cursor: pointer;
  ${only("md")} {
    width: 600px;
  }
  ${down("xs")} {
    width: 80%;
    margin: 0px;
  }
  img,
  video {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .introducing {
    height: 350px;
  }
`;
