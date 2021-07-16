import styled from "styled-components";

function IconButton(props) {
    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
}

export default IconButton;

const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    padding: calc(20px - 0.7rem);
    background-color: transparent;
    color: #ffffff;
    transition: opacity 300ms;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.7;
    }
`