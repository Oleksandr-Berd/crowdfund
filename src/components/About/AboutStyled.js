import styled from "@emotion/styled";

export const AboutConStyled = styled.div`
padding-top: 40px;
padding-bottom: 40px;
padding-left: 24px;
padding-right: 24px;

background-color: #fff;

border-radius: 8px;
`

export const AboutContentCon = styled.div`

margin-bottom: 36px;

& > h3{
    margin-bottom: 24px;

    font-size: 18px;
    font-weight: 700;
    color: #000;
}

& > p{
    font-size: 14px;
    line-height: 1.7;

    color: #7a7a7a;

    &:not(:last-of-type){
        margin-bottom: 24px;
    }
}
`

export const AboutList = styled.ul``