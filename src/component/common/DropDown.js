import styled from 'styled-components';
import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

import IconButton from './IconButton';

function DropDown(props){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    DropDown['handleClickOutside_' + props.id] = () => setIsOpen(false);

    const options = props.options.map((option, index) => (
        option && 
        (option.text === "seperator" ? <SeperatorContainer key={index}><Seperator key={index} width={props.width}/></SeperatorContainer>
        : <DropDownContent key={index} onClick={(event) => {toggle(); option.eventHandler(event);}}>{option.text}</DropDownContent>)
    ));

    return (
        <DropDownContainer>
            {
                (props.id === "profile") ?
                <Profile onClick={toggle}/>
                : <IconButton icon={props.icon} size="1.2rem" color="#7E7E7E" onClick={toggle}/>
            }
            {
                isOpen ?
                <DropDownBox width={props.width} id={props.id}>
                    {options}
                </DropDownBox>
                : null
            }
        </DropDownContainer>
    );
};

const clickOutsideConfig = {
    handleClickOutside: ({ props }) => DropDown['handleClickOutside_' + props.id]
};

export default onClickOutside(DropDown, clickOutsideConfig);

const SeperatorContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Seperator = styled.div`
    width: ${props => props.width ? props.width * 0.8 + `px` : `50px`};
    height: 1px;
    background-color: #727272;
`;

const DropDownContainer = styled.div`
`

const DropDownBox = styled.div`
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    top: ${props => (props.id === "profile") ? `50px` : `0`};
    right: 0;
    z-index: 1;
    background-color: #3c3c3c;
    box-shadow: ${props => (props.id === "profile") ? `unset` : `0 0 10px lightgray`};
    width: ${props => props.width ?  props.width + `px` : `80px`};
    border-radius: ${props => (props.id === "profile") ? `5px` : `unset`}
`

const DropDownContent = styled.div`
    color: #ffffff;
    font-size: 0.8rem;
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;

    &:hover {
        outline: 1px solid white;
    }
`

const Profile = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-color: white;
    border-radius: 50%;
`