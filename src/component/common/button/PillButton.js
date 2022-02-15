import styled from "styled-components";

function PillButton(props) {
    return (
        <Button width={props.width} negative={props.negative} onClick={props.onClick}>
            {props.children}
        </Button>
    );
}

export default PillButton;

const Button = styled.button`
    width: ${props => props.width || "120px"};
    height: 40px;
    border: 1px solid ${props => props.negative ? "#707070" : "#3C3C3C"};
    border-radius: 20px;
    background-color: ${props => props.negative ? "#707070" : "#3C3C3C"};
    color: #ffffff;
    transition: border 300ms, opacity 300ms;
    cursor: pointer;

    &:hover {
        border: 1px solid white;
    }
    &:active {
        opacity: 0.6;
    }
`