// Import styled components
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 1);
  overflow: hidden;
  z-index: 201;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 15px;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.7);
  .svg1 {
    position: absolute;
    left: 3%;
    top: 3%;
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.red};
    cursor: pointer;
    z-index: 10;
  }
  div {
    width: 100%;
    height: 100%;
  }
  a {
    .svg2 {
      position: absolute;
      right: 3%;
      bottom: 3%;
      width: 32px;
      height: 32px;
      color: ${(props) => props.theme.red};
      cursor: pointer;
      z-index: 10;
    }
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export const ModalVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
