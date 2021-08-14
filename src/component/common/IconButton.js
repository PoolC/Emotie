import styled from "styled-components";

function IconButton(props) {
    return (
        <Button size={props.size} color={props.color} onClick={props.onClick}>
            {props.icon && <props.icon fontSize={props.size || "1.4rem"}/>}
        </Button>
    );
}

export default IconButton;

const Button = styled.button`
    width: ${props => props.size || "1.4rem"};
    height: ${props => props.size || "1.4rem"};
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${props => props.color || "#ffffff"};
    transition: opacity 300ms;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
    &:active {
        opacity: 0.6;
    }
`