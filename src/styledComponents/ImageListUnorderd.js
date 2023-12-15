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
