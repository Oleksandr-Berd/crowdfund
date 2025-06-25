import styled from "@emotion/styled";

export const GraceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  padding-top: 140px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: rgba(0, 0, 0, 0.3);

  overflow: hidden;
`;

export const GraceCon = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1280px) {
    width: 38%;
    margin-left: auto;
    margin-right: auto;

    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    padding-right: 48px;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 700;
  }

  & > p {
    margin-bottom: 32px;

    font-size: 14px;
    line-height: 1.7;

    color: #7a7a7a;
  }

  & > button {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;

    font-size: 14px;
    font-weight: 700;

    background-color: #3cb3ab;
    color: #fff;

    border-radius: 32px;
    transition: background 0.3s;

    @media (min-width: 1280px) {
      &:hover,
      &:focus,
      &:active {
        background-color: #147a73;

        transition: background 0.3s;
      }

      cursor: pointer;
    }
  }
`;

export const GraceThumb = styled.div`
  margin-bottom: 24px;

  & > img {
    width: 64px;
    height: 64px;

    margin-left: auto;
    margin-right: auto;
  }
`;
