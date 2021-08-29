import styled, { keyframes, css } from "styled-components";

function Progress(props) {
    return (
        <Container isInProgress={props.isInProgress}>
            <Bar isInProgress={props.isInProgress} color="#FF855D" delay="0s"/>
            <Bar isInProgress={props.isInProgress} color="#FFF27D" delay="100ms"/>
            <Bar isInProgress={props.isInProgress} color="#AEE477" delay="200ms"/>
            <Bar isInProgress={props.isInProgress} color="#9FA7EF" delay="300ms"/>
            <Bar isInProgress={props.isInProgress} color="#F29CB6" delay="400ms"/>
        </Container>
    );
}

export default Progress;

const stretch = keyframes`
    0% {
        transform: scaleY(1.0);
    }
    100% {
        transform: scaleY(1.5);
    }
`

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
    gap: 7px;
    z-index: 10;
    backdrop-filter: blur(3px);
    opacity: ${props => props.isInProgress ? "1" : "0"};
    visibility: ${props => props.isInProgress ? "visible" : "hidden"};
    transition: 200ms all;
    pointer-events: none;
`
const Bar = styled.div`
    width: 6px;
    height: 30px;
    border-radius: 3px;
    background-color: ${props => props.color};
    ${props => props.isInProgress && css`
        animation: ${stretch} ease 400ms ${props.delay} infinite alternate;
    `}
`