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
export const ProfileButton = styled.a`
    padding:10px;
    font-size:1em;
    font-weight:bold;
    width:60%;
    text-align:right;
    margin:0 20%;
    &:hover {
        cursor:pointer;
    }
    
`
export const Wrapper= styled.div`
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
export const Post = styled.div`
    width:100%;
    height:30vh;
    margin:30px 0;

`
export const Info = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    margin:15px 0;
`

export const Nickname = styled.span`
    flex: 1 0 0;
    margin-left: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
`

export const Date = styled.span`
    font-size: 1rem;
    color: #ffffff;
`

export const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    width: 70%;
    font-size: 1rem;
    color: #ffffff;
    line-height: 2;
    height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    word-wrap: break-word;
    -webkit-line-clamp: 3;
`

export const Icons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    gap: 10px;

    @media only screen and (max-width: 1100px) {
        display: none;
    }
`