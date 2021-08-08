import styled from "styled-components";

function PillInput(props) {
    return (
        <Input type="text" {...props}/>
    );
}

export default PillInput;

const Input = styled.input`
    height: 40px;
    width : ${props => props.width || "150px"};
    padding: 0 30px;
    border: 1px solid #808080;
    border-radius: 20px;
    background-color: #1E1E1E;
    color: #ffffff;
    transition: border-color 300ms;

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`