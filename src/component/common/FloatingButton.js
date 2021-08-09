import styled from "styled-components";

function FloatingButton(props) {
    return (
        <Button onClick={props.onClick} bottom={props.bottom}>
            {props.icon && <props.icon fontSize="1.4rem"/>}
        </Button>
    );
}

export default FloatingButton;

const Button = styled.button`
    position: fixed;
    bottom: ${props => props.bottom ? props.bottom + `px` : `20px`};
    right: 30px;
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
        opacity: 0.6;
    }

    @media only screen and (max-width: 768px) {
        bottom: ${props => props.bottom ? (props.bottom - 5) + `px` : `15px`};
        right: 15px;
    }
`