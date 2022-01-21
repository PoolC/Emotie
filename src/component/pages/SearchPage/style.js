import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 80px 30px 20px 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        padding: 75px 15px 15px 15px;
    }
`

export const ProfileList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 80%;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: center;
        width: 100%;
        gap: 15px;
        max-width: 400px;
    }
`
export const MobileSpace = styled.div`
    width: 100%;
    height: 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 60px;
    }
`