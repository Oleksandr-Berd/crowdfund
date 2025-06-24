import styled from "@emotion/styled";

export const NavMenuOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  padding-top: 88px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const NavList = styled.ul`
  background-color: #fff;

  border-radius: 8px;

  & > li {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;

    & > button {
      font-size: 18px;
      font-weight: 500;

      background-color: transparent;
    }
  }

  & > li:not(:last-of-type) {
    border-bottom: 1px solid #979797;
  }
`;
