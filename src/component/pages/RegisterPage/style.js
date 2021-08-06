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
export const Gap = styled.div`
    gap:10px;
    @media only screen and (max-width: 768px) {
    }
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
    font-size: 8pt;
    text-align:left;
    color:#EF9797;

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

export const FlexBox = styled.div`
    display:flex;
    justify-content:center;
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

export const GenderButton = styled.button`
    margin-left:10px;  
    width: 75px;
    height: 40px;
    border-radius: 20px;
    background-color: #707070;
    border: none;
    color: #ffffff;
    transition: border 300ms, opacity 300ms;
    &:hover {
        background-color: #A7A7A7;
    }
    &:active {
        opacity: 0.6;
    }
`
export const BirthInput = styled.input`
    height: 40px;
    width : ${props => props.width || "150px"};
    padding: 0 10px;
    border: 1px solid #808080;
    border-radius: 15px;
    background-color: #1E1E1E;
    color: #ffffff;
    transition: border-color 300ms;
    margin-left:10px;

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`





