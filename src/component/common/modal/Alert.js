import styled from "styled-components";

import PillShadowButton from "@common/button/PillShadowButton";

function Alert(props) {
    const onFirstClick = () => {
        props.setOpen(false);
        if (props.firstButtonFunc) props.firstButtonFunc();
    };
    const onSecondClick = () => {
        props.setOpen(false);
        if (props.secondButtonFunc) props.secondButtonFunc();
    };
    return (
        <Container isOpen={props.isOpen}>
            <Dialog isOpen={props.isOpen}>
                {props.title && <Title>{props.title}</Title>}
                <Message>{props.message}</Message>
                <ButtonContainer>
                    <PillShadowButton width="100%" onClick={onFirstClick} negative>{props.firstButton || '확인'}</PillShadowButton>
                    {props.secondButton && <PillShadowButton width="100%" onClick={onSecondClick} negative>{props.secondButton}</PillShadowButton>}
                </ButtonContainer>
            </Dialog>
        </Container>
    );
}

export default Alert;

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
    z-index: 30;
    background-color: #b6b6b635;
    opacity: ${props => props.isOpen ? "1" : "0"};
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    transition: 200ms all;
`
const Dialog = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    padding: 20px;
    margin-top: ${props => props.isOpen ? "0" : "30px"};
    box-sizing: border-box;
    background-color: #3C3C3C;
    border-radius: 28px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 200ms margin-top;
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
const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    box-sizing: border-box;
`