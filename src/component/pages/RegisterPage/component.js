import styled from "styled-components";

import PillShadowButton from "../../common/button/PillShadowButton";

import Template from "./template";

function Term(props) {
    const onFirstClick = () => {
        props.setOpen(false);
        if (props.firstButtonFunc) props.firstButtonFunc();
    };
    return (
        <Container isOpen={props.isOpen}>
            <Dialog isOpen={props.isOpen}>
                <Title>이용 약관</Title>
                <Message>
                    <Template></Template>
                </Message>
                <ButtonContainer>
                    <PillShadowButton width="300px" onClick={onFirstClick} negative>{props.firstButton || '확인'}</PillShadowButton>
                </ButtonContainer>
            </Dialog>
        </Container>
    );
}

export default Term;

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
    width: 800px;
    padding: 20px;
    margin-top: ${props => props.isOpen ? "0" : "30px"};
    box-sizing: border-box;
    background-color: #3C3C3C;
    border-radius: 28px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 200ms margin-top;
    @media only screen and (max-width: 768px) {
        width:90%;
    }
`
const Title = styled.h2`
    margin: 0;
    font-size: 1.1rem;
    text-align: center;
    color: white;
`
const Message = styled.div`
    background-color:#1E1E1E;
    margin: 10px 0 15px 0;
    font-size: 0.8rem;
    text-align: left;
    color: white;
    height:500px;
    overflow:scroll;
    padding:30px;
    line-height:1.6;
    @media only screen and (max-width: 768px) {
        height:300px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content:center;
    flex-flow: row nowrap;
    gap: 20px;
    box-sizing: border-box;
`