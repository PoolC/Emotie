import styled from 'styled-components';

import { GiCheckMark } from "react-icons/gi"

function CheckBox(props) {
    return(
        <CheckSection onClick={props.onClick}>
            <CheckLabel>{props.label}</CheckLabel>
            <CheckBoxContainer>
                <CheckIcon visibility={props.checked ? "visible" : "hidden"}/>
            </CheckBoxContainer>
        </CheckSection>
    );
}

export default CheckBox;

const CheckSection = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`
const CheckLabel = styled.label`
    color: #ffffff;
    cursor: pointer;
`

const CheckBoxContainer = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid #ffffff;
`

const CheckIcon = styled(GiCheckMark)`
    color: white;
    margin-bottom: 3px;
`;