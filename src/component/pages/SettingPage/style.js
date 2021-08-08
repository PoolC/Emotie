import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 90px 30px 30px 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        padding: 75px 15px 15px 15px;
    }
`

export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 100%;
    max-width: 700px;
    gap: 30px;
`
export const CategoryLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
`
export const Category = styled.button`
    padding: 7px 0;
    background: none;
    border: none;
    border-bottom: ${props => props.selected ? "2px solid white" : "2px solid gray"};
    color: ${props => props.selected ? "white" : "gray"};
    font-size: 1rem;
    transition: border-bottom ease 300ms, color ease 300ms;

    &:hover {
        border-bottom: 2px solid white;
        color: white;
    }
`
export const FrameLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`
export const Description = styled.p`
    margin: 0;
    color: white;
    font-size: 0.9rem;
    word-break: keep-all;
`