import styled from "@emotion/styled";

export const AboutConStyled = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1280px) {
    width: 50%;

    margin-left: auto;
    margin-right: auto;

    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    padding-right: 48px;

    text-align: left;
  }
`;

export const AboutContentCon = styled.div`
  margin-bottom: 36px;

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 18px;
    font-weight: 700;
    color: #000;

    @media (min-width: 1280px) {
      margin-bottom: 36px;

      font-size: 20px;
    }
  }

  & > p {
    font-size: 14px;
    line-height: 1.7;

    color: #7a7a7a;

    @media (min-width: 1280px) {
      font-size: 16px;
    }

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
`;

export const ItemTitleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const AboutList = styled.ul`
  & li {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;

    border: 1px solid #979797;
    border-radius: 8px;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }

    & h4 {
      margin-bottom: 8px;

      font-size: 14px;
      font-weight: 700;
      color: #000;

      @media (min-width: 1280px) {
        margin-bottom: 0;
      }
    }

    & h5 {
      margin-bottom: 24px;

      font-size: 14px;
      font-weight: 500;

      color: #3cb3ab;

      @media (min-width: 1280px) {
        margin-bottom: 0;
      }
    }

    & > p {
      margin-bottom: 24px;

      font-size: 14px;
      line-height: 1.7;
      color: #7a7a7a;
    }
  }
`;

export const AboutDataBtnCon = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AboutDataCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 24px;

  & > h6 {
    margin-right: 8px;

    font-size: 32px;
    font-weight: 700;

    color: #000;
  }

  & > p {
    margin-bottom: 0;

    font-size: 15px;
    color: #7a7a7a;
  }
`;

export const AboutRewarBtn = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;

  font-size: 14px;
  font-weight: 700;

  color: #fff;
  background-color: #3cb3ab;

  border-radius: 32px;

  transition: background 0.3s;

  @media (min-width: 1280px) {
    &:hover,
    &:focus,
    &:active {
      background-color: #147a73;
      cursor: pointer;

      transition: background 0.3s;
    }
  }
`;
