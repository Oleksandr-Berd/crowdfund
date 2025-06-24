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

  @media (min-width: 1280px) {
    position: static;

    width: auto;
    height: auto;

    padding: 0;

    background-color: transparent;
  }
`;

export const NavList = styled.ul`
  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: inherit;

    border-radius: 0;
  }

  & > li {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;

    @media (min-width: 1280px) {
      padding: 0;
    }

    & > button {
      font-size: 18px;
      font-weight: 500;

      background-color: transparent;

      @media (min-width: 1280px) {
        font-size: 13px;

        color: #fff;

        &:focus,
        &:active,
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  & > li:not(:last-of-type) {
    border-bottom: 1px solid #979797;

    @media (min-width: 1280px) {
      margin-right: 32px;

      border-bottom: none;
    }
  }
`;
