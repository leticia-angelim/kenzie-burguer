import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.7rem 0.9rem;

  background: var(--gray-0);

  img {
    width: 158.94px;
    height: 36.83px;
  }

  @media (min-width: 765px) {
    flex-direction: row;
    padding: 0.7rem 7rem;
  }
`;
