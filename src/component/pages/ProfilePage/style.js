import styled from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    min-height: 100vh;
    padding: 0 calc(15% - 30px) 0 15%;
    box-sizing: border-box;
    background-color: ${props => props.emotion?.color || "white"};
    
    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        padding: 0;
    }
`

export const MotieLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 35%;

    @media only screen and (max-width: 768px) {
        width: unset;
        height: 300px;
        margin-top: 60px;
    }
`

export const ContentLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    height: 100vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        height: unset;
        overflow-y: unset;
    }
`

export const ProfileLayout = styled.div`
    position: sticky;
    top: 90px;
    display: flex;
    flex-flow: column nowrap;
    margin-top: 90px;
    padding: 0 30px;
    gap: 20px;
    z-index: 10;
    background-color: ${props => props.backgroundColor + "CC"};
    backdrop-filter: blur(5px);

    @media only screen and (max-width: 768px) {
        top: 60px;
        margin-top: 60px;
    }
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
export const StateLayout = styled.div`
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
export const MenuLayout = styled.div`
    position: absolute;
    right: 30px;
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
`
export const CategoryLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    border-top: 1px solid #111111;
    opacity: ${props => props.isEditMode ? 0.2 : 1};
    transition: opacity 300ms;
    pointer-events: ${props => props.isEditMode ? 'none' : 'unset'};
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
export const InputLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    box-sizing: border-box;
    margin: -20px 0 0 0;
    padding: 0 30px;
    gap: 15px;
    background-color: #3C3C3CAA;
    border-radius: 5px;
    opacity: ${props => props.isEditMode ? 0.2 : 1};
    transition: opacity 300ms;
    pointer-events: ${props => props.isEditMode ? 'none' : 'unset'};
`
export const Input = styled.input`
    flex: 1 0 0;
    height: 40px;
    background: none;
    border: none;
    color: #ffffff;

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #ffffff80;
    }
`

export const PostList = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    gap: 10px;
    padding: ${props => props.category === 1 ? "15px" : "0"} 30px 90px 30px;
    opacity: ${props => props.isEditMode ? 0.2 : 1};
    transition: opacity 300ms;
    pointer-events: ${props => props.isEditMode ? 'none' : 'unset'};

    @media only screen and (max-width: 768px) {
        padding-bottom: 30px;
    }
`

export const Boundary = styled.div`
    position: fixed;
    top: ${props => props.top ? "0" : "unset"};
    bottom: ${props => props.bottom ? "0" : "unset"};
    left: 0;
    width: 100%;
    height: 90px;
    z-index: 10;
    background-color: ${props => props.backgroundColor + "CC"};
    backdrop-filter: blur(5px);

    @media only screen and (max-width: 768px) {
        height: ${props => props.top ? "60px" : "0"};
    }
`