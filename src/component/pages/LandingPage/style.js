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
export const Wrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding:40px;
    gap:20px;
    @media only screen and (max-width: 768px) {
    }
`

export const Logo = styled.img`
    width:200px;
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
    font-size: 18pt;
    text-align:center;
    color:#FFFFFF;
    word-break:keep-all;

    @media only screen and (max-width: 768px) {
    }
`