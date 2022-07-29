import styled from "styled-components";

export const Input = styled.input`
  width: 95vw;
  height: 60px;
  padding: 15px;

  background: var(--color-background);
  border-radius: 8px;
  border: 2px solid var(--gray-20);

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--gray-20);
  }

  &:focus {
    border: 2px solid var(--gray-100);
  }

  @media (min-width: 400px) {
    width: 382px;
  }
`;
