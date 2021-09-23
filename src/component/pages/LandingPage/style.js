import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 80px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        padding-top: 75px;
    }
`
export const Wrap = styled.div`
    display: flex;
    width:100%;
    height:600px;
    @media only screen and (max-width: 768px) {
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
    }
`
export const TextPart = styled.div`
    text-align:left;
    width:55%;
    padding-top:5%;
    padding-left:5%;
    height:100%;
    @media only screen and (max-width: 768px) {
    }
`

export const Logo = styled.img`
    width:75px;
    padding:35px;
    @media only screen and (max-width: 768px) {
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
    }
`