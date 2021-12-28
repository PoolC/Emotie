import styled from "styled-components";

export const Container = styled.div`
    word-break:keep-all;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 110px 30px 20px 30px;
    box-sizing: border-box;
    gap:10px;

    @media only screen and (max-width: 768px) {
        padding: 90px 0px 0px 0px;
    }
`
export const Gap = styled.div`
    gap:10px;
`

export const InputGroup = styled.div`
    text-align:center;
    @media only screen and (max-width: 768px) {
    }
`

export const InputAlert = styled.div`
    width:200px;
    height:20px;
    padding: 4px 20px;
    font-size: 0.7em;
    text-align:left;
    color:#EF9797;

    @media only screen and (max-width: 768px) {
    }
`

export const Title = styled.div`
    width: 400px;
    height: 40px;
    font-size: 1.5rem;
    text-align:center;
    font-weight:bold;
    color:#FFFFFF;

    @media only screen and (max-width: 768px) {
        width:70%;
    }
`

export const Text = styled.div`
    width:400px;
    height:60px;
    font-size: 0.9rem;
    text-align:center;
    color:#FFFFFF;
    padding-bottom:10px;

    @media only screen and (max-width: 768px) {
        width:70%;
    }
`

export const Border = styled.a`
    border-top:1px solid #FFFFFF;
    width:400px;
    height:40px;
    margin:30px;
    font-size:0.7em;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media only screen and (max-width: 768px) {
        width:70%;
    } 
`
export const Link = styled.a`
    text-decoration:none;
    cursor: pointer;
    :hover{
        text-decoration:underline;
    }

`

export const Logo = styled.img`
    width:50px;
    @media only screen and (max-width: 768px) {
    }
`

export const FlexBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#ffffff;
    font-size:0.7em;
    @media only screen and (max-width: 768px) {
    }
`

export const CertButton = styled.button`
    word-break:keep-all;
    margin-left:10px;  
    width: 50px;
    height: 40px;
    border-radius: 10px;
    background-color: #707070;
    border: none;
    color: #ffffff;
    font-size:0.4em;
    transition: border 300ms, opacity 300ms;
    &:hover {
        background-color: #A7A7A7;
    }
    &:active {
        opacity: 0.6;
    }
`

export const ButtonText = styled.a`
    width:300px;
    height:20px;
    font-size: 0.7em;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:#FFFFFF;
    margin-top:-10px;
    :hover{
        text-decoration:underline;
    }
    @media only screen and (max-width: 768px) {
    }
`




