import styled from 'styled-components';

import IconButton from './IconButton';
import EmotionTag from './EmotionTag';
import DropDown from './DropDown';
import { AiOutlineShareAlt, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiAlarmWarningLine, RiDeleteBinLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function PostCard(props) {
    const options = [
        props.share ? {
            text: "공유하기",
            eventHandler: onShare
        } : null,
        props.blur ? {
            text: "보지않기",
            eventHandler: onBlur
        } : null,
        props.report ? {
            text: "신고하기",
            eventHandler: onReport
        } : null,
        props.delete ? {
            text: "삭제하기",
            eventHandler: onDelete
        } : null
    ];

    function onShare(event) {
        event.stopPropagation();
        console.log("share");
    }

    function onBlur(event) {
        event.stopPropagation();
        console.log("blur");
    }

    function onReport(event) {
        event.stopPropagation();
        console.log("report");
    }

    function onDelete(event) {
        event.stopPropagation();
        console.log("delete");
    }

    return (
        <Wrapper>
            <Container detail={props.detail} borderColor={props.emotion?.color} onClick={props.onClick}>
                <Info detail={props.detail}>
                    {!props.hideEmotion && <EmotionTag emotion={props.emotion}/>}
                    <Nickname hideEmotion={props.hideEmotion} detail={props.detail}>{props.nickname || "공릉동 공룡"}</Nickname>
                    <Date>{props.date || "2021.07.20"}</Date>
                </Info>
                <Content detail={props.detail}>{props.content || "그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다. 그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다."}</Content>
                <Icons>
                    {props.share && <IconButton icon={AiOutlineShareAlt} size="1.2rem" color="#7E7E7E" onClick={onShare}/>}
                    {props.blur && <IconButton icon={AiOutlineEyeInvisible} size="1.2rem" color="#7E7E7E" onClick={onBlur}/>}
                    {props.report && <IconButton icon={RiAlarmWarningLine} size="1.2rem" color="#7E7E7E" onClick={onReport}/>}
                    {props.delete && <IconButton icon={RiDeleteBinLine} size="1.2rem" color="#7E7E7E" onClick={onDelete}/>}
                </Icons>
            </Container>
            {(props.share || props.blur || props.report || props.delete) && <DropDownContainer><DropDown options={options} icon={BiDotsHorizontalRounded} id={props.id}/></DropDownContainer>}
        </Wrapper>
    );
}

export default PostCard;

const Wrapper = styled.div`
    position: relative;
`

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
    background-color: ${props => props.detail ? `#1e1e1e` : `#3C3C3C`};
    border: ${props => props.detail ? `unset` : `1px solid #3C3C3C`};
    border-radius: 5px;
    transition: border 300ms, opacity 300ms;
    cursor: default;

    ${props => !props.detail &&
        `
        &:hover {
            border: 1px solid ${props.borderColor || "#ffffff"};
        }

        &:active {
            opacity: 0.7;
        }
        `
    }
`

const Info = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    ${props => props.detail &&
        `
        @media only screen and (max-width: 768px) {
            flex-flow: column nowrap;
            align-items: flex-start;
            gap: 2px;
        }
        `
    }
`

const Nickname = styled.span`
    flex: 1 0 0;
    margin-left: ${props => props.hideEmotion ? `0` : `20px`};
    font-size: 0.9rem;
    font-weight: bold;
    color: #ffffff;

    ${props => props.detail &&
        `
        @media only screen and (max-width: 768px) {
            margin-left: 0;
        }
        `
    }
`

const Date = styled.span`
    font-size: 0.8rem;
    color: #ffffff;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    color: #ffffff;
    
    ${props => props.detail ? 
    `
    width: 100%;
    height: 15em;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    font-size: 1rem;
    line-height: 2;
    letter-spacing: 1.5px;
    ` 
    : 
    `
    width: 70%;
    height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    font-size: 0.8rem;
    line-height: 2;
    `
    }
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

const DropDownContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 40px;
    display: none;

    @media only screen and (max-width: 1100px) {
        display: flex;
    }
`