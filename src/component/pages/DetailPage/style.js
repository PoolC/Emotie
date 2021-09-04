import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    align-items: center;
    padding: 60px 0 0 0;
    box-sizing: border-box;
    color: white;

    @media only screen and (max-width: 768px) {
        padding: 15px 15px 15px 15px;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 20vh;
    align-items: center;
    margin:0;
    width:100%;
    box-sizing: border-box;
    color: #1E1E1E;
    background-color:#9431A4;
    flex-direction: column-reverse;

    @media only screen and (max-width: 768px) {
    }
`
export const ProfileButton = styled.div`
    padding:10px;
    font-weight:bold;
    width:60%;
    text-align:right;
    margin:0 20%;
`
export const Post= styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 40vh;
    width:60%;
    align-items: center;
    margin:0 20%;
    box-sizing: border-box;
    color: black;
    background-color:#1E1E1E;

    @media only screen and (max-width: 768px) {
        padding: 15px 15px 15px 15px;
    }
`