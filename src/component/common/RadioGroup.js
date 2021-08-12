import styled from "styled-components";

function RadioGroup(props) {
    const onOptionChanged = (event) => props.handleState(event.target.value * 1);

    return (
        <>{props.options.map((option, index) => (
            <RadioWrapper key={index}>
                <Radio type="radio" value={index} onChange={onOptionChanged} checked={props.state === index}/>
                {option}
            </RadioWrapper>
        ))}</>
    );
}

export default RadioGroup;

const RadioWrapper = styled.label`
    font-size: 0.9rem;
    color: white;
`
const Radio = styled.input`
    margin-right: 10px;
    appearance: none;
    width: 10px;
    height: 10px;
    border: 1px solid white;
    border-radius: 50%;

    &:checked {
        background-color: lightgray;
    }
    &:hover {
        background-color: white;
    }
`