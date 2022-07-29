import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  align-items: flex-start;

  figure {
    display: flex;
    align-items: center;

    width: 80px;
    height: 80px;
    margin-right: 15px;

    background: var(--gray-20);
    border-radius: 5px;
  }

  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  h3 {
    padding: 0;

    width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

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

  @media (min-width: 413px) {
    padding: 7px 0;

    h3 {
      width: 15ch;
    }
  }
`;

export const Button = styled.button`
  padding-top: 7px;
  padding-left: 30px;

  border: none;
  background: inherit;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #bdbdbd;

  &:hover {
    color: var(--gray-100);
    text-decoration: underline;
  }
`;
