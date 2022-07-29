import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  gap: 20px;

  overflow-x: scroll;

  @media (min-width: 1024px) {
    flex-wrap: wrap;

    margin-bottom: 1rem;
    padding: 2rem;
    overflow: hidden;
  }
`;
