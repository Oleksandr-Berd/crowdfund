import styled from "@emotion/styled";

export const DiscoverConStyled = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: #fff;

  border-radius: 8px;
`;

export const DiscoverItem = styled.li`
  position: relative;

  padding-top: 24px;
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
  }

  &:not(:last-of-type) {
    margin-bottom: 24px;
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
