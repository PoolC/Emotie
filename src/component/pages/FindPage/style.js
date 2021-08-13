import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 110px 30px 20px 30px;
    box-sizing: border-box;
    gap:20px;

    @media only screen and (max-width: 768px) {
        padding: 90px 15px 15px 15px;
        gap:10px;
    }
`

export const ButtonText = styled.a`
    width:300px;
    height:20px;
    font-size: 10pt;
    text-align:center;
    text-decoration:none;
    color:#FFFFFF;
    margin-top:-10px;
    :hover{
        text-decoration:underline;
    }
    @media only screen and (max-width: 768px) {
    }
`

export const Title = styled.div`
    width: 400px;
    height: 40px;
    font-size: 24pt;
    text-align:center;
    font-weight:bold;
    color:#FFFFFF;

    @media only screen and (max-width: 768px) {
    }
`

export const Text = styled.div`
    width:400px;
    height:60px;
    font-size: 12pt;
    text-align:center;
    color:#FFFFFF;

    @media only screen and (max-width: 768px) {
    }
`

export const FlexBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#ffffff;
    font-size:8pt;
    @media only screen and (max-width: 768px) {
    }
`

export const CertButton = styled.button`
    margin-left:10px;  
    width: 50px;
    height: 40px;
    border-radius: 10px;
    background-color: #707070;
    border: none;
    color: #ffffff;
    font-size:3pt;
    transition: border 300ms, opacity 300ms;
    &:hover {
        background-color: #A7A7A7;
    }
    &:active {
        opacity: 0.6;
    }
`