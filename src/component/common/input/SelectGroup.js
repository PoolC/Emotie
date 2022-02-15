import styled from "styled-components";

function SelectGroup(props) {
    const onOptionChanged = (event) => props.handleState(event.target.value);

    return (
        <Wrapper>
            <SelectWrapper onChange={onOptionChanged} value={props.state}>
                {props.options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </SelectWrapper>
        </Wrapper>
    );
}

export default SelectGroup;

const Wrapper = styled.div`
    position: relative;

    &::after {
        content: ">";
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 0.8rem;
        color: white;
        transform: translateY(-50%) rotate(90deg) scaleX(0.7);
        pointer-events: none;
    }
`
const SelectWrapper = styled.select`
    width: 80px;
    height: 40px;
    border: 1px solid #808080;
    border-radius: 20px;
    padding: 0 10px;
    appearance: none;
    background-color: #1E1E1E;
    color: white;
    cursor: pointer;
    transition: border-color 300ms;

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`