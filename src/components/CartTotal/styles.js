import styled from "styled-components";

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  padding-bottom: 1rem;
  border-radius: 0px 0px 5px 5px;

  background: var(--gray-0);

  div {
    display: flex;
    gap: 242px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-100);
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-50);
  }
`;

export const Button = styled.button`
  width: 343px;
  height: 60px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--gray-50);

  background: var(--gray-20);
  border-radius: 8px;
  border: 2px solid var(--gray-20);

  &:hover {
    color: var(--gray-20);
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
  }
`;
