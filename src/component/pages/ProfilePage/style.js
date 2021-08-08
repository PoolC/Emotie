import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    padding: 90px 15%;
    box-sizing: border-box;
    background-color: ${props => props.emotion?.color || "white"};

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        padding: 30px 30px 0 30px;
    }
`

export const MotieLayout = styled.div`
    width: 40%;

    @media only screen and (max-width: 768px) {
        width: unset;
        height: 300px;
    }
`

export const ContentLayout = styled.div`
    position: relative;
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    gap: 20px;
`
export const InfoLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`
export const Nickname = styled.h1`
    margin: 0;
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    opacity: ${props => props.isEditMode ? 0.2 : 1};
    transition: opacity 300ms;
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
export const DescriptionCount = styled.span`
    height: 0;
    align-self: flex-end;
    margin-top: -15px;
    font-size: 0.8rem;
    color: black;
    overflow: visible;
    opacity: ${props => props.isEditMode ? 1 : 0};
    transition: opacity ease 300ms;
`
export const MenuLayout = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
`
export const FollowerLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
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

    @media only screen and (max-width: 768px) {
        padding-bottom: 30px;
    }
`
export const InputLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    box-sizing: border-box;
    margin-top: 10px;
    gap: 15px;

    @media only screen and (max-width: 768px) {
        padding: 10px 30px;
        margin: 0 -30px;
        background-color: #3C3C3C;
        box-shadow: 0 0 2px black;
        z-index: 1;
    }
`
export const PillInputWrapper = styled.div`
    flex: 1 0 0;
    display: flex;
`