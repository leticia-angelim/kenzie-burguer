import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  @media (min-width: 1025px) {
    flex-direction: row;

    padding: 2rem 10rem;
  }
`;
