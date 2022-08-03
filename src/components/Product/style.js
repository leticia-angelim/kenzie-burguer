import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 300px;
  height: 346px;
  overflow: hidden;
  padding-bottom: 23px;

  background: var(--color-background);
  border-radius: 5px;
  border: 2px solid var(--gray-20);

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--gray-50);
  }

  strong {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }

  @media (min-width: 769px) {
    transition: 0.3s ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Frame = styled.figure`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 300px;
  height: 150px;
  margin-bottom: 26px;

  background: var(--gray-0);
`;

export const Info = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-between;

  height: 196px;
  padding: 0px 21px;
`;

export const Button = styled.button`
  width: 106px;
  height: 40px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--color-background);

  border-radius: 8px;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);

  transition: 0.3s ease-out;

  &:hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }
`;
