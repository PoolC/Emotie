import styled from "styled-components";

function PillInput(props) {
    return (
        <Input type="text" placeholder={props.placeholder}/>
    );
}

export default PillInput;

const Input = styled.input`
    height: 40px;
    padding: 0 30px;
    border: 1px solid #808080;
    border-radius: 20px;
    background-color: #1E1E1E;
    color: #ffffff;

    &:focus {
        outline: none;
    }
`