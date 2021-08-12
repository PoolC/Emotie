import styled from "styled-components";

function SelectGroup(props) {
    const onOptionChanged = (event) => props.handleState(event.target.value);

    return (
        <SelectWrapper onChange={onOptionChanged} value={props.state}>
            {props.options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </SelectWrapper>
    );
}

export default SelectGroup;

const SelectWrapper = styled.select`
    width: 80px;
    height: 40px;
    border: 1px solid #808080;
    border-radius: 20px;
    padding: 0 10px;
    background-color: #1E1E1E;
    color: white;
    transition: border-color 300ms;

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`