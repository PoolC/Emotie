import styled from "styled-components";

function FloatingButton(props) {
    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
}

export default FloatingButton;

const Button = styled.button`
    width: 54px;
    height: 54px;
    border: none;
    border-radius: 50%;
    padding: calc(27px - 0.7rem);
    background-color: #3C3C3C;
    color: #ffffff;
    box-shadow: 0 0 20px black;
    transition: opacity 300ms;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.7;
    }
`