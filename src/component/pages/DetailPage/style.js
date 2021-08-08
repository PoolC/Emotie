import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 20px 30px 20px 30px;
    box-sizing: border-box;
    color: white;

    @media only screen and (max-width: 768px) {
        padding: 15px 15px 15px 15px;
    }
`