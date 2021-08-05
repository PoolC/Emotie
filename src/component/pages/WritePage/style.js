import styled from "styled-components";

import { GiCheckMark } from "react-icons/gi"

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
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const TagContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;

    @media only screen and (max-width: 768px) {
        margin-top: 20px;
        width: 300px;
    }
`

export const Tag = styled.div`
    width: 75px;
    height: 120px;
    border-radius: 10px;
    background-color: ${props => props.tagState ? `#333333` : `#000000`};
    opacity: ${props => props.tagState ? `1` : `0.3`};
    display: flex;
    justify-content: center;

    &:hover {
        background-color: #333333;
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {
        width: 65px;
    }
`

export const TextSection = styled.div`
    position: relative;
    margin: 30px 0 50px 0;
`

export const TextArea = styled.textarea`
    padding: 30px;
    width: 670px;
    height: 150px;
    border: 1px solid #808080;
    border-radius: 20px;
    background-color: transparent;
    resize: none;
    outline: none;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        width: 70vw;
        height: 110px;
    }
`
export const CheckSection = styled.div`
    position: absolute;
    bottom: -30px;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
`
export const CheckLabel = styled.label`
    color: #ffffff;
`

export const CheckBox = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid #ffffff;
`

export const CheckIcon = styled(GiCheckMark)`
    color: white;
    margin-bottom: 3px;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 20px;
`