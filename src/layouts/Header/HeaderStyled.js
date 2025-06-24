import styled from "@emotion/styled";

import heroMob from "../../assets/images/image-hero-mobile.jpg";
import heroDesk from "../../assets/images/image-hero-desktop.jpg";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;

  background-image: url(${heroMob});
  background-size: contain;

  @media (min-width: 1220px) {
    height: 400px;

    padding-top: 48px;
    padding-left: 164px;
    padding-right: 164px;

    background-image: url(${heroDesk});
    background-size: cover;
  }
`;

export const BurgerButton = styled.button`
  width: 16px;
  height: 15px;

  background-color: transparent;
`;
