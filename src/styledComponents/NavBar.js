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
  margin-right: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 550px) {
    margin-right: 4rem;
  }
`;

export const InputField = styled.input`
  border: 2px solid lightgray;
  border-radius: 6px;
  background-color: white;
  padding: 8px;
  width: 220px;
  display: block;
  outline: none;

  @media (max-width: 472px) {
    margin-bottom: 20px;
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
