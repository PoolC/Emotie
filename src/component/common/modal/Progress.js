import styled, { keyframes, css } from "styled-components";

function Progress(props) {
    return (
        <Container isInProgress={props.isInProgress} fullscreen={props.fullscreen}>
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
    position: ${props => props.fullscreen ? "fixed" : "static"};
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: ${props => props.fullscreen ? "100%" : "unset"};
    height: ${props => props.fullscreen ? "100vh" : "unset"};
    gap: 7px;
    z-index: 30;
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