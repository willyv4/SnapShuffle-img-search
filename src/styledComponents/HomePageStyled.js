import { styled } from "styled-components";

export const StyledMainDiv = styled.div`
  position: relative;
`;

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 87rem;
`;

export const StyledContentDiv = styled.div`
  position: relative;
  z-index: 10;
  padding-top: 3.5rem;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 42rem;
  }
`;

export const HomeContainer = styled.div`
  position: relative;
  padding: 32px 24px;

  @media (min-width: 640px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 1024px) {
    padding-left: 32px;
    padding-right: 0;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`;

export const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;

  @media (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 36rem;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
`;

export const StyledDiv = styled.div`
  position: relative;
  border-radius: 100px;
  padding: 0px 1rem;
  font-size: 13px;
  line-height: 0.5rem;
  color: #718096;
  border: 1px solid rgba(55, 65, 81, 0.1);
  transition: border-color 0.3s ease;
  &:hover {
    border-color: rgba(55, 65, 81, 0.3);
  }
`;

export const StyledHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #2d3748;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

export const StyledParagraph = styled.p`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.625rem;
  color: #4a5568;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ),
    url("https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    position: absolute;
    z-index: -10;
    margin-top: -78px;
    inset-inline-start: auto;
    inset-inline-end: 0;
    inset-block-start: 0;
    width: 50%;
    height: 100vh;
  }

  @media (max-width: 1023px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
  }
`;
