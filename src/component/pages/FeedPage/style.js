import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 80px 30px 20px 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        padding: 75px 15px 0 15px;
    }
`

export const PostList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 60%;
    gap: 20px;
    min-width: 700px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        gap: 15px;
        min-width: unset;
    }
`

export const WBR = styled.br`
    display: none;

    @media only screen and (max-width: 600px) {
        display: block;
    }
`

export const Info = styled.div`
    margin-top: 100px;
    color: white;
    text-align: center;
`