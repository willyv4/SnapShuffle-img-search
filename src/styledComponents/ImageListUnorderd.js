import styled from "styled-components";

export const UlImageList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem 1rem 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 3rem;
    column-gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 3rem;
    column-gap: 3rem;
  }
`;

export const FullScreenErrorDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-image: ${`url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenteredErrorText = styled.h1`
  color: white;
  text-align: center;
  font-size: 2rem;
  padding-left: 80px;
  padding-right: 80px;
`;
