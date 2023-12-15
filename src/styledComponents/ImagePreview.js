import styled from "styled-components";

export const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 80;
  top: -40px;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => `rgba(${props.color}, 0.3)`};
  backdrop-filter: blur(10px);
  opacity: 0;
`;

export const PicturePreview = styled.img`
  object-fit: cover;
  height: 70%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: auto;
  max-width: 100%;
  margin-top: 70px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.7);
`;
