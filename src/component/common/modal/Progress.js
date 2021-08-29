import styled, { keyframes, css } from "styled-components";

function Progress(props) {
    return (
        <Container isInProgress={props.isInProgress}>
            <Bar isInProgress={props.isInProgress} delay="0s"/>
            <Bar isInProgress={props.isInProgress} delay="100ms"/>
            <Bar isInProgress={props.isInProgress} delay="200ms"/>
            <Bar isInProgress={props.isInProgress} delay="300ms"/>
            <Bar isInProgress={props.isInProgress} delay="400ms"/>
        </Container>
    );
}

export default Progress;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 5px;
    z-index: 10;
    backdrop-filter: blur(3px);
    opacity: ${props => props.isInProgress ? "1" : "0"};
    visibility: ${props => props.isInProgress ? "visible" : "hidden"};
    transition: 200ms all;
    pointer-events: none;
`
const stretch = keyframes`
    0% {
        transform: scaleY(1.0);
    }
    100% {
        transform: scaleY(1.5);
    }
`
const Bar = styled.div`
    width: 6px;
    height: 30px;
    border-radius: 3px;
    background-color: white;
    ${props => props.isInProgress && css`
        animation: ${stretch} ease 400ms ${props.delay} infinite alternate;
    `}
`