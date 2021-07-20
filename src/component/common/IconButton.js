import styled from "styled-components";

function IconButton(props) {
    return (
        <Button size={props.size} iconSize={props.iconSize} color={props.color} onClick={props.onClick}>
            {props.icon && <props.icon fontSize={props.iconSize || "1.4rem"}/>}
        </Button>
    );
}

export default IconButton;

const Button = styled.button`
    width: ${props => props.size || "40px"};
    height: ${props => props.size || "40px"};
    border: none;
    border-radius: 50%;
    padding: ${props => `calc((${props.size || "40px"} - ${props.iconSize || "1.4rem"}) / 2)`};
    background-color: transparent;
    color: ${props => props.color || "#ffffff"};
    transition: opacity 300ms;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.7;
    }
`