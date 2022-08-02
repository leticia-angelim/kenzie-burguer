import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 95vw;

  @media (min-width: 407px) {
    max-width: 382px;
    margin-top: 2rem;
  }
`;

export const CartTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 65px;
  padding-left: 20px;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-background);

  background: var(--color-primary);
  border-radius: 5px 5px 0px 0px;
`;

export const EmptyCart = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 158px;

  background: var(--gray-0);
  border-radius: 0px 0px 5px 5px;

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-50);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 21px;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;

  background: var(--gray-0);
  border-radius: 0px 0px 5px 5px;
`;

export const Separation = styled.div`
  width: 340px;
  height: 2px;

  background: var(--gray-20);
`;
