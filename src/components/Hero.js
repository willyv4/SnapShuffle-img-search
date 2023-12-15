import {
  HomeContainer,
  ContentContainer,
  TextWrapper,
  StyledDiv,
  StyledHeading,
  StyledParagraph,
  InputWrapper,
  ImageWrapper,
} from "../styledComponents/HomePageStyled";
import { Form } from "./NavBar";

export const Hero = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <TextWrapper>
          <StyledDiv>
            <p style={{ textAlign: "center", width: "100%" }}>
              Search for all the Images you need with{" "}
              <span style={{ color: "#14b8a6", fontWeight: "bold" }}>
                SnapShuffle
              </span>
            </p>
          </StyledDiv>
        </TextWrapper>
        <StyledHeading>
          Captivating Images Instantly with a simple search!
        </StyledHeading>
        <StyledParagraph>
          {" "}
          Explore a world of images with our user-friendly search platform! Find
          high-quality visuals across diverse categories swiftly and
          effortlessly. Whether you're a creative seeking inspiration or need
          visuals for your project, our extensive collection has you covered.
          Elevate your content with ease using our intuitive and comprehensive
          image search website.
        </StyledParagraph>
        <br />
        <h3 style={{ marginLeft: "2px" }}>Search Images</h3>
        <InputWrapper>
          <Form />
        </InputWrapper>
        <ImageWrapper />
      </ContentContainer>
    </HomeContainer>
  );
};
