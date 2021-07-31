import styled from 'styled-components';
import { useState } from "react";

import IconButton from './IconButton';
import EmotionTag from './EmotionTag';
import { AiOutlineShareAlt, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiAlarmWarningLine, RiDeleteBinLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function PostCard(props) {
    const [drop, setDrop] = useState(false);

    const dropdown = () => {
        setDrop(true);
    }

    return (
        <Container borderColor={props.emotion?.color}>
            <Info>
                {!props.hideEmotion && <EmotionTag emotion={props.emotion}/>}
                <Nickname hideEmotion={props.hideEmotion}>{props.nickname || "공릉동 공룡"}</Nickname>
                <Date>{props.date || "2021.07.20"}</Date>
            </Info>
            <Content>{props.content || "그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다. 그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다."}</Content>
            <Icons>
                {props.share && <IconButton icon={AiOutlineShareAlt} size="1.2rem" color="#7E7E7E"/>}
                {props.blur && <IconButton icon={AiOutlineEyeInvisible} size="1.2rem" color="#7E7E7E"/>}
                {props.report && <IconButton icon={RiAlarmWarningLine} size="1.2rem" color="#7E7E7E"/>}
                {props.delete && <IconButton icon={RiDeleteBinLine} size="1.2rem" color="#7E7E7E"/>}
            </Icons>
            {(props.share || props.blur || props.report || props.delete) &&
            <DropDown>
                <IconButton icon={BiDotsHorizontalRounded} size="1.2rem" color="#7E7E7E" onClick={dropdown}/>
                <DropDownBox drop={drop}>
                    {props.share && <DropDownContent>공유하기</DropDownContent>}
                    {props.blur && <DropDownContent>보지않기</DropDownContent>}
                    {props.report && <DropDownContent>신고하기</DropDownContent>}
                    {props.delete && <DropDownContent>삭제하기</DropDownContent>}
                </DropDownBox>
            </DropDown>}
        </Container>
    );
}

export default PostCard;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    padding: 20px 40px;
    gap: 10px;
    box-sizing: border-box;
    background-color: #3C3C3C;
    border: 1px solid #3C3C3C;
    border-radius: 5px;
    transition: border 300ms, opacity 300ms;
    // min-width: 300px;

    &:hover {
        border: 1px solid ${props => props.borderColor || "#ffffff"};
    }

    &:active {
        opacity: 0.7;
    }
`

const Info = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
`

const Nickname = styled.span`
    flex: 1 0 0;
    margin-left: ${props => props.hideEmotion ? `0` : `20px`};
    font-size: 0.9rem;
    font-weight: bold;
    color: #ffffff;
`

const Date = styled.span`
    font-size: 0.6rem;
    color: #ffffff;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    width: 70%;
    font-size: 0.6rem;
    color: #ffffff;
    line-height: 2;
    height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    word-wrap: break-word;
    -webkit-line-clamp: 3;
`

const Icons = styled.div`
    position: absolute;
    bottom: 20px;
    right: 40px;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;

    @media only screen and (max-width: 1100px) {
        display: none;
    }
`

const DropDown = styled.div`
    position: absolute;
    bottom: 20px;
    right: 40px;
    display: none;

    @media only screen and (max-width: 1100px) {
        display: flex;
    }
`

const DropDownBox = styled.div`
    display: ${props => props.drop ? `flex` : `none`};
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    right: 0;
    min-width: 80px;
    z-index: 1;
    background-color: #3c3c3c;
    box-shadow: 0 0 10px lightgray;
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