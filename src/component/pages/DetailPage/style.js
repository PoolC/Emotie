import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 60px 0 30px 0;
    box-sizing: border-box;
    color: white;
`
export const Profile = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin:0;
    width:100%;
    height:200px;
    box-sizing: border-box;
    color: #1E1E1E;
    background-color:${props=>props.backgroundColor?props.backgroundColor:"#FFF27D"};
    flex-direction: column-reverse;
    &:hover {
        cursor:pointer;
    }
`

export const ProfileWrapper = styled.div`
    position:relative;
    width:60%;
    margin:0 20%;
    @media only screen and (max-width: 768px) {
        width:100%;
        margin:0;
    }
`
export const ProfileButton = styled.a`
    position:absolute;
    padding:10px;
    bottom:20px;
    right:20px;
    color:white;
    font-size:1em;
    font-weight:bold;
    border-radius:15px;
    background-color:#1E1E1E;
`
export const Wrapper= styled.div`
    display: flex;
    flex-flow: column nowrap;
    width:60%;
    align-items: center;
    box-sizing: border-box;
    color: black;
    background-color:#1E1E1E;
    @media only screen and (max-width: 768px) {
        width:80%;
    }
`
export const Post = styled.div`
    width:100%;
    margin:5% 0;
    display:flex;
    flex-flow: column nowrap;
    align-items:flex-end;
    gap:10px;
`
export const Info = styled.div`
    gap:15px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    margin:15px 0;
    @media only screen and (max-width: 768px) {
        gap:8px;
        flex-flow:column nowrap;
        align-items:flex-start;
    }

`

export const Nickname = styled.span`
    flex: 1 0 0;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
`

export const Date = styled.span`
    font-size: 1rem;
    color: #ffffff;
`

export const Content = styled.p`
    margin: 0;
    width: 100%;
    font-size: 1rem;
    color: #ffffff;
    line-height: 2;
    word-wrap: break-word;
`

export const UrlArea = styled.textarea`
    position:absolute;
    z-index:-1;    
`