import styled from "@emotion/styled";

export const GetStartedConStyled = styled.div`
  position: relative;

  transform: translateY(-52px);

  margin-bottom: -28px;

  padding-top: 52px;
  padding-bottom: 52px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1280px) {
    transform: translateY(-92px);

    width: 50%;

    margin-bottom: -68px;

    padding-top: 56px;
    padding-bottom: 48px;
    padding-left: 48px;
    padding-right: 48px;

    margin-left: auto;
    margin-right: auto;
  }

  &::before {
    content: "";

    position: absolute;

    top: 0;
    left: 50%;

    transform: translate(-50%, -50%);

    display: inline-block;
    width: 56px;
    height: 56px;

    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23000' cx='28' cy='28' r='28'/%3E%3Cg fill-rule='nonzero'%3E%3Cpath d='M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z' fill='%23444'/%3E%3Cpath d='M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z' fill='%23FFF'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

export const GetStartedContentCon = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const GetStartedTitleStyled = styled.h3`
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: 700;

  color: #000;

  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const GetStartedContentStyled = styled.p`
  font-size: 14px;
  line-height: 1.7;

  color: #7a7a7a;

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const GetStartedBtnsCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GetStartedBackBtnStyled = styled.button`
  min-width: 214px;

  margin-right: 8px;

  padding-top: 16px;
  padding-bottom: 18px;

  font-size: 16px;
  font-weight: 700;

  background-color: #3cb3ab;
  color: #fff;

  border-radius: 32px;

  transition: background 0.3s;

  @media (min-width: 1280px) {
    &:hover,
    &:active,
    &:focus {
      background-color: #147a73;

      transition: background 0.3s;

      cursor: pointer;
    }
  }
`;

export const GetStartedBookmark = styled.button`
  width: 56px;
  height: 56px;

  background-color: #2f2f2f;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='rgba(47%2C47%2C47%2C0.1)' cx='28' cy='28' r='28'/%3E%3Cpath fill='rgba(177%2C177%2C177%2C0.3)' d='M23 19v18l5-5.058L33 37V19z'/%3E%3C/g%3E%3C/svg%3E");

  border-radius: 50%;

  @media (min-width: 1280px) {
    position: relative;

    width: auto;

    padding-top: 16px;
    padding-bottom: 20px;
    padding-left: 72px;
    padding-right: 24px;

    font-size: 16px;
    font-weight: 700;

    color: #7a7a7a;
    background-color: #b1b1b1;

    background-image: none;

    border-radius: 32px;

    overflow: hidden;

    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
    }

    &::before {
      content: "";
      position: absolute;

      top: 0;
      left: 0;

      width: 56px;
      height: 56px;

      background-color: #2f2f2f;

      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='rgba(47%2C47%2C47%2C0.1)' cx='28' cy='28' r='28'/%3E%3Cpath fill='rgba(177%2C177%2C177%2C0.3)' d='M23 19v18l5-5.058L33 37V19z'/%3E%3C/g%3E%3C/svg%3E");

      border-radius: 50%;
    }
  }
`;
