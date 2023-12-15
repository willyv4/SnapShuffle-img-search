import styled from "styled-components";

export const NavBarStyled = styled.nav`
  width: 100%;
  padding: 0px 2.5rem 0px 2.5rem;
  background-color: #f4f4f5;
  position: fixed;
  top: 0px;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  z-index: 99;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
`;

export const SnapShuffleLogo = styled.h1`
  background-image: linear-gradient(
    to left,
    #14b8a6,
    ${(props) => props.theme.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: x-large;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormContainer = styled.form`
  position: relative;
  place-items: center;
  margin-right: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputField = styled.input`
  border: 2px solid lightgray;
  border-radius: 6px;
  background-color: white;
  padding: 8px;
  width: 220px;
  display: block;
  outline: none;
  height: 15.5px;

  @media (max-width: 640px) {
    padding-right: 0px;
    margin-right: -20px;
    width: screen;
  }

  @media (max-width: 450px) {
    padding-right: 0px;
    margin-right: -20px;
    margin-bottom: 20px;
    width: screen;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  inset-inline-start: auto;
  inset-block-start: 0;
  inset-inline-end: 0;
  right: 0;
  display: flex;
  padding-top: 0.375rem;
  padding-right: 0.375rem;
  border: none;
  background-color: transparent;
`;
