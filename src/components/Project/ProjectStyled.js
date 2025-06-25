import styled from "@emotion/styled";

export const FormStyled = styled.form`
  position: fixed;

  overflow-y: auto;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: 1280px) {
    padding-top: 184px;
    padding-bottom: 280px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProjectCon = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1280px) {
    width: 50%;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const PledgeCon = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    & > *:not(:last-of-type) {
      margin-right: 16px;
    }

  }
`;

export const TitleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const FormTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const CloseBtn = styled.button`
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;

  background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z' fill='%23000' fill-rule='evenodd' opacity='0.4'/%3E%3C/svg%3E");

  @media (min-width: 1280px){

    &:hover, &:focus, &:active{
        cursor: pointer;
    }
  }
`;

export const FormContent = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 1.7;

  color: #7a7a7a;
`;

export const ProjectList = styled.ul`
  & > li {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;

    border: 1px solid #7a7a7a;
    border-radius: 8px;

    &:has(input:checked) {
      border: 2px solid #3cb3ab;
    }

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
`;

export const InputCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 32px;

  & > *:first-of-type {
    margin-right: 8px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;

  color: #000;

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: 500;

  color: #3cb3ab;
`;

export const ItemContent = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 1.7;

  color: #7a7a7a;
`;

export const Leftover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p:first-of-type {
    margin-right: 8px;

    font-size: 18px;
    font-weight: 700;

    color: #000;
  }

  & > p:last-of-type {
    font-size: 15px;
    color: #7a7a7a;
  }
`;

export const Line = styled.div`
  width: calc(100% + 24px * 2);
  height: 1px;

  transform: translateX(-24px);

  margin-top: 24px;

  background-color: #7a7a7a;
`;

export const AccordCon = styled.div`
  padding-top: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > p {
    margin-bottom: 16px;

    font-size: 14px;
    line-height: 1.7;

    color: #7a7a7a;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  & label {
    position: relative;
  }

  & input {
    width: 100px;

    margin-right: 16px;

    padding-top: 18px;
    padding-bottom: 16px;
    padding-left: 32px;

    font-size: 14px;
    font-weight: 700;

    color: #000;

    border: 1px solid #7a7a7a;
    border-radius: 32px;

    &::placeholder {
      color: #000;
    }
  }

  & button {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;

    font-size: 14px;
    font-weight: 700;

    background-color: #3cb3ab;
    color: #fff;

    border-radius: 32px;

    @media (min-width: 1280px){

        &:focus, &:active, &:hover{
            
        }
    }
  }
`;

export const Bucks = styled.p`
  position: absolute;

  top: 50%;
  left: 0;

  transform: translate(20px, -50%);

  font-size: 14px;
  font-weight: 700;

  color: #7a7a7a;
`;
