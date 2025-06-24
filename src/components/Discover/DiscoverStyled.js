import styled from "@emotion/styled";

export const DiscoverConStyled = styled.div`
  margin-bottom: 24px;

  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1280px) {
    width: 50%;

    margin-left: auto;
    margin-right: auto;

    & > ul {
      margin-bottom: 36px;

      @media (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
`;

export const DiscoverScale = styled.div`
  width: 100%;
  height: 12px;

  background: linear-gradient(to right, #3cb3ab 90%, #979797 90%);

  border-radius: 32px;
`;

export const DiscoverItem = styled.li`
  position: relative;

  padding-top: 24px;

  @media (min-width: 1280px) {
    padding-top: 0;

    &:not(:first-of-type) {
      padding-left: 40px;
    }

    &:not(:last-of-type) {
      padding-right: 40px;

      border-right: 1px solid #979797;
    }
  }
  &::after {
    content: "";

    position: absolute;

    bottom: 0;
    left: 50%;

    transform: translate(-50%, 24px);

    width: 80px;
    height: 2px;

    display: inline-block;

    background-color: #979797;

    opacity: 0.5;

    @media (min-width: 1280px) {
      display: none;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 24px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 48px;
    }
  }

  & > h3 {
    margin-bottom: 8px;

    font-size: 32px;
    font-weight: 700;

    color: #000;
  }

  & > p {
    font-size: 14px;
    color: #7a7a7a;
  }
`;
