import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi"

export const Container = styled.div`
    word-break:keep-all;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 110px 30px 20px 30px;
    box-sizing: border-box;
    gap:10px;

    @media only screen and (max-width: 768px) {
        padding: 90px 15px 15px 15px;
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

export const Border = styled.a`
    border-top:1px solid #FFFFFF;
    width:400px;
    height:40px;
    margin:30px;
    font-size:10pt;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media only screen and (max-width: 768px) {
    } 
`
export const Link = styled.a`
    text-decoration:none;
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
    justify-content:center;
    align-items:center;
    color:#ffffff;
    font-size:8pt;
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
export const GenderLabel = styled.button`
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

export const CheckSection = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap:5px;
`
export const CheckLabel = styled.label`
    color: #ffffff;
    margin-left:16px;
`

export const CheckBox = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid #ffffff;
`

export const CheckIcon = styled(GiCheckMark)`
    color: white;
`;




