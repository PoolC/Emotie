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
    position: absolute;
    bottom: -30px;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
`
const CheckLabel = styled.label`
    color: #ffffff;
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