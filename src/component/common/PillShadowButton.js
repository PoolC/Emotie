import styled from "styled-components";

function PillShadowButton(props) {
    return (
        <Button width={props.width} negative={props.negative} onClick={props.onClick}>
            {props.children}
        </Button>
    );
}

export default PillShadowButton;

const Button = styled.button`
    width: ${props => props.width || "120px"};
    height: 35px;
    border: none;
    border-radius: 18px;
    background-color: ${props => props.negative ? "#707070" : "#3C3C3C"};
    box-shadow: 0 1px 2px black;
    color: #ffffff;
    font-weight: 700;
    transition: box-shadow 300ms, opacity 300ms;

    &:hover {
        box-shadow: 0 2px 2px black;
    }
    &:active {
        opacity: 0.6;
    }
`