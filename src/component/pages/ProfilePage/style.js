import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    padding: 80px 200px;
    box-sizing: border-box;
    background-color: ${props => props.emotion?.color || "white"};

    @media only screen and (max-width: 768px) {
        padding: 15px;
    }
`

export const MotieLayout = styled.div`
    width: 40%;
`

export const ContentLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    gap: 10px;
`
export const HeaderLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    gap: 20px;
`
export const Nickname = styled.input`
    flex: 1 0 0;
    background-color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    transition: all ease 300ms;

    &:disabled {
        padding: 0;
        background-color: transparent;
        border-radius: 0;
        color: black;
        font-size: 1.5rem;
    }
`
export const Description = styled.textarea`
    background-color: black;
    padding: 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    resize: none;
    color: white;
    font-size: 0.8rem;
    font-family: sans-serif;
    transition: all ease 300ms;

    &:disabled {
        padding: 0;
        background-color: transparent;
        border-radius: 0;
        color: black;
    }
`
export const FollowerLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 40px;
    gap: 40px;
    opacity: ${props => props.isEditMode ? 0.2 : 1};
    transition: opacity 300ms;
    pointer-events: ${props => props.isEditMode ? 'none' : 'unset'};
`
export const State = styled.span`
    font-size: 0.9rem;
    color: black;
    font-weight: 600;
`
export const PostLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    border-top: 1px solid #111111;
    opacity: ${props => props.isEditMode ? 0.2 : 1};
    transition: opacity 300ms;
    pointer-events: ${props => props.isEditMode ? 'none' : 'unset'};
`
export const CategoryLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`
export const Category = styled.button`
    padding: 15px;
    background: none;
    border: none;
    color: black;
    font-size: 1rem;
    font-weight: 600;
    opacity: ${props => props.selected ? 1 : 0.2};
    transition: opacity 300ms;

    &:hover {
        opacity: 1;
    }
`
export const PostList = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    gap: 10px;
    overflow-y: scroll;
`