import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 80px 30px 20px 30px;
    box-sizing: border-box;
    gap: 30px;

    @media only screen and (max-width: 768px) {
        padding: 75px 15px 15px 15px;
    }
`

export const LoginContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 20px;
    gap: 20px;
    border: 1px solid white;
    border-radius: 5px;
`
export const LoginToken = styled.span`
    font-size: 1rem;
    color: white;
`

export const PostList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 50%;
    gap: 20px;
`
export const ProfileList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
`