import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;
`
export const Wrap = styled.div`
    display: flex;
    width:100%;
    height:600px;
    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        height:90vh;
    }
`
export const MainPart = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    @media only screen and (max-width: 768px) {
    }
`
export const ImagePart = styled.div`
    width:45%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        width:100%;
        height:45vh;
    }
`
export const TextPart = styled.div`
    text-align:left;
    width:55%;
    padding-top:5%;
    padding-left:5%;
    height:100%;
    @media only screen and (max-width: 768px) {
        width:100%;
        height:45vh;
        padding:0;
        text-align:center;
        align-items: center;
        justify-content: center;
    }
`

export const Logo = styled.img`
    width:75px;
    padding:35px;
    @media only screen and (max-width: 768px) {
        padding:20px;
    }
`


export const Title = styled.div`
    width: 500px;
    font-size: 24pt;
    font-weight:bold;
    color:#FFFFFF;
    word-break:keep-all;
    padding-bottom:20px;

    @media only screen and (max-width: 768px) {
        width:90%;
        margin:5vh 5% 0 5%;
        font-size: 1.6em;
    }
`

export const Text = styled.div`
    width:400px;
    font-size: 18pt;
    color:#FFFFFF;
    word-break:keep-all;
    line-height:1.6;
    padding-bottom:20px;

    @media only screen and (max-width: 768px) {
        width:90%;
        margin:0 5%;
        font-size: 1.4em;
    }
`
export const CharacterImg = styled.img`
    width:70%;
    @media only screen and (max-width: 768px) {
    }
`
export const FeedImg = styled.img`
    height:90%;
    margin-top:5%;
    @media only screen and (max-width: 768px) {
    }
`
export const RecommendImg = styled.img`
    width:90%;
    padding-right:10%;
    @media only screen and (max-width: 768px) {
        padding:0;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content:center;
    backgroud-color:#3C3C3C;
    width:100%;
    height:30px;
    padding-bottom:30px;
    
    `
export const FooterContent = styled.div`
    display:flex;
    justify-content:end;
    align-items:end;
    width:90%;
    font-size:1em;
    color:#757575;
    `