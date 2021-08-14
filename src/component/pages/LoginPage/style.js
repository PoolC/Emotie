import styled from "styled-components";

export const Container = styled.div`
    word-break:keep-all;
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
export const Gap = styled.div`
    gap:15px;
    @media only screen and (max-width: 768px) {
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

export const Switch = styled.a`
    border-top:1px solid #FFFFFF;
    width:400px;
    height:40px;
    margin:30px;
    font-size:10pt;
    color:#FFFFFF;
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
        text-decoration:underline;
    }
    @media only screen and (max-width: 768px) {
    }
    
`

export const Logo = styled.img`
    width:50px;
    @media only screen and (max-width: 768px) {
    }
`