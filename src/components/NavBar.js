import CameraIcon from "../icons/CameraIcon";
import useCustomAnimation from "../hooks/HeaderAnimation";
import {
  FormContainer,
  InputField,
  LogoContainer,
  SnapShuffleLogo,
  SubmitButton,
  SvgWrapper,
} from "../styledComponents/NavBar";
import { NavBarStyled } from "../styledComponents/NavBar";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import SearchIcon from "../icons/SearchIcon";

export const NavBar = () => {
  const animationRef = useCustomAnimation();
  const { setQuery } = useContext(MyContext);
  return (
    <div ref={animationRef}>
      <NavBarStyled id="nav-bar">
        <LogoContainer onClick={() => setQuery("")}>
          <CameraIcon id="intro-roller" />
          <SnapShuffleLogo id="nav-logo-text">
            {"SnapShuffle".split("").map((char, i) => (
              <span key={char + i + "shuffle-text"} id="letters">
                {char}
              </span>
            ))}
          </SnapShuffleLogo>
        </LogoContainer>
        <Form />
      </NavBarStyled>
    </div>
  );
};

export const Form = () => {
  const { setQuery } = useContext(MyContext);
  const [data, setData] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(data);
    setData("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        placeholder="Search Images"
        onChange={(evt) => setData(evt.target.value)}
        name="search"
        value={data}
        type="text"
        required
      />
      <SubmitButton type="submit">
        <SearchIcon />
      </SubmitButton>
    </FormContainer>
  );
};
