import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 80px 30px 20px 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        padding: 75px 15px 15px 15px;
    }
`