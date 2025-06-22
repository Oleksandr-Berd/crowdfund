import styled from "@emotion/styled";

export const AboutConStyled = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fff;

  border-radius: 8px;
`;

export const AboutContentCon = styled.div`
  margin-bottom: 36px;

  & > h3 {
    margin-bottom: 24px;

    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

  & > p {
    font-size: 14px;
    line-height: 1.7;

    color: #7a7a7a;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
`;

export const AboutList = styled.ul`
  & > li {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;

    border: 1px solid #979797;
    border-radius: 8px;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }

    & > h4 {
      margin-bottom: 8px;

      font-size: 14px;
      font-weight: 700;
      color: #000;
    }

    & > h5 {
      margin-bottom: 24px;

      font-size: 14px;
      font-weight: 500;

      color: #3cb3ab;
    }

    & > p {
      margin-bottom: 24px;

      font-size: 14px;
      line-height: 1.7;
      color: #7a7a7a;
    }
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

  & > p{
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
background-color: #3CB3AB;

border-radius: 32px;
`