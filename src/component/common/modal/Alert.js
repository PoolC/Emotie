import styled from "styled-components";

import PillShadowButton from "../PillShadowButton";

function Alert(props) {
    return (
        <Container isOpen={props.isOpen}>
            <Dialog isOpen={props.isOpen}>
                {props.title && <Title>{props.title}</Title>}
                <Message>{props.message}</Message>
                <PillShadowButton width="100%" onClick={() => props.setOpen(false)} negative>확인</PillShadowButton>
            </Dialog>
        </Container>
    );
}

export default Alert;

const Container = styled.div`
    position: ${props => props.isOpen ? "fixed" : "none"};
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(7px);
    opacity: ${props => props.isOpen ? "1" : "0"};
    transition: 100ms opacity;
`
const Dialog = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 300px;
    padding: 20px;
    margin-top: ${props => props.isOpen ? "0" : "30px"};
    box-sizing: border-box;
    background-color: #3C3C3C;
    border-radius: 28px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 100ms ease margin-top;
`
const Title = styled.h1`
    margin: 0;
    font-size: 1.1rem;
    text-align: center;
    color: white;
`
const Message = styled.p`
    margin: 10px 0 15px 0;
    font-size: 0.8rem;
    text-align: center;
    color: white;
`