import styled from 'styled-components';
import { useState } from 'react';

import IconButton from './IconButton';
import EmotionTag from './EmotionTag';
import DropDown from './DropDown';
import { AiOutlineShareAlt, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiAlarmWarningLine, RiDeleteBinLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Alert from './modal/Alert';



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

    const [alertInfo, setAlertInfo] = useState({
        isOpen: false,
        title: "Alert",
        message: "alert message",
        firstButtonFunc: null
    });

    function setIsOpen(isOpen) {
        setAlertInfo({
            ...alertInfo,
            isOpen: isOpen
        });
    }

    function onShare(event) {
        event.stopPropagation();
       
        const url = `http://localhost:3000/profile/:${1}/post/:${props.diaryId}`
        navigator.clipboard.writeText(url);
        setAlertInfo({
            isOpen: true,
            title: "마음글 공유 성공",
            message: "마음글 공유 url을 복사하였습니다.",
            firstButtonFunc: null
        });

        console.log("share");
    }

    function onBlur(event) {
        event.stopPropagation();
        // if(props.diary) {
        //     server
        //     .post('/diaries/blind/{props.diaryId}')
        //     .then(response => {
        //         console.log(response.data);
        //         setAlertInfo({
        //             isOpen: true,
        //             title: "마음글 숨기기 성공",
        //             message: "숨기기가 완료되었습니다.",
        //             firstButtonFunc: () => window.location.reload()
        //         });
        //     })
        //     .catch(error => {
        //         if(error.response && error.response.status === 404) {
        //             setAlertInfo({
        //                 isOpen: true,
        //                 title: "마음글 숨기기 실패",
        //                 message: "해당 마음글이 존재하지 않습니다.",
        //                 firstButtonFunc: () => window.location.reload()
        //             }); 
        //         }   
        //     });
        // }

        console.log("blur");
    }

    function onReport(event) {
        event.stopPropagation();
        // if(props.diary) {
        //     server
        //     .post('/diaries/report/{props.diaryId}')
        //     .then(response => {
        //         console.log(response.data);
        //         setAlertInfo({
        //             isOpen: true,
        //             title: "마음글 신고 성공",
        //             message: "신고가 완료되었습니다.",
        //             firstButtonFunc: () => window.location.reload()
        //         });
        //     })
        //     .catch(error => {
        //         if(error.response && error.response.status === 404) {
        //             setAlertInfo({
        //                 isOpen: true,
        //                 title: "마음글 신고 실패",
        //                 message: "해당 마음글이 존재하지 않습니다.",
        //                 firstButtonFunc: () => window.location.reload()
        //             });     
        //         }   
        //     });
        // }
        // else if(props.guestbook) {
        //     server
        //     .post('/guestbooks/report/{props.guestbookId}')
        //     .then(response => {
        //         console.log(response.data);
        //         setAlertInfo({
        //             isOpen: true,
        //             title: "방명록 신고 성공",
        //             message: "신고가 완료되었습니다.",
        //             firstButtonFunc: () => window.location.reload()
        //         });
        //     })
        //     .catch(error => {
        //         if(error.response && error.response.status === 404) {
        //             setAlertInfo({
        //                 isOpen: true,
        //                 title: "방명록 신고 실패",
        //                 message: "해당 방명록이 존재하지 않습니다.",
        //                 firstButtonFunc: () => window.location.reload()
        //             });
        //         }
        //     });
        // }

        console.log("report");
    }

    function onDelete(event) {
        event.stopPropagation();
        // if(props.diary) {
        //     server
        //     .delete('/diaries', {
        //          "id": [props.diaryId]
        //     })
        //     .then(response => {
        //         console.log(response.data);
        //         setAlertInfo({
        //             isOpen: true,
        //             title: "마음글 삭제 성공",
        //             message: "삭제가 완료되었습니다.",
        //             firstButtonFunc: () => window.location.reload()
        //         });
        //     })
        //     .catch(error => {
        //         if(error.response && error.response.status === 404) {
        //             setAlertInfo({
        //                 isOpen: true,
        //                 title: "마음글 삭제 실패",
        //                 message: "해당 마음글이 존재하지 않습니다.",
        //                 firstButtonFunc: () => window.location.reload()
        //             });       
        //         }   
        //     });
        // }
        // else if(props.guestbook) {
        //     server
        //     .delete('/guestbooks/{props.guestbookId}')
        //     .then(response => {
        //         console.log(response.data);
        //         setAlertInfo({
        //             isOpen: true,
        //             title: "방명록 삭제 성공",
        //             message: "삭제가 완료되었습니다.",
        //             firstButtonFunc: () => window.location.reload()
        //         });
        //     })
        //     .catch(error => {
        //         if(error.response && error.response.status === 404) {
        //             setAlertInfo({
        //                 isOpen: true,
        //                 title: "방명록 삭제 실패",
        //                 message: "해당 방명록이 존재하지 않습니다.",
        //                 firstButtonFunc: () => window.location.reload()
        //             });
        //         }
        //     });
        // }

        console.log("delete");
    }

    return (
        <Wrapper>
            <Container borderColor={props.emotion?.color} onClick={props.onClick}>
                <Info>
                    {!props.hideEmotion && <EmotionTag emotion={props.emotion}/>}
                    <Nickname hideEmotion={props.hideEmotion}>{props.nickname || "공릉동 공룡"}</Nickname>
                    <Date>{props.date || "2021.07.20"}</Date>
                </Info>
                <Content>{props.content || "그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다. 그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다."}</Content>
                <Icons>
                    {props.share && <IconButton icon={AiOutlineShareAlt} size="1.2rem" color="#7E7E7E" onClick={onShare}/>}
                    {props.blur && <IconButton icon={AiOutlineEyeInvisible} size="1.2rem" color="#7E7E7E" onClick={onBlur}/>}
                    {props.report && <IconButton icon={RiAlarmWarningLine} size="1.2rem" color="#7E7E7E" onClick={onReport}/>}
                    {props.delete && <IconButton icon={RiDeleteBinLine} size="1.2rem" color="#7E7E7E" onClick={onDelete}/>}
                </Icons>
            </Container>
            {/* 모달 */}
            {(props.share || props.blur || props.report || props.delete) && <DropDownContainer><DropDown options={options} icon={BiDotsHorizontalRounded} id={props.id}/></DropDownContainer>}
            <Alert title={alertInfo.title} message={alertInfo.message} isOpen={alertInfo.isOpen} setOpen={setIsOpen} firstButtonFunc={alertInfo.firstButtonFunc}/>
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
    background-color: #3C3C3C;
    border: 1px solid #3C3C3C;
    border-radius: 5px;
    transition: border 300ms, opacity 300ms;
    cursor: default;
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
    word-break: keep-all;
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

const DropDownContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 40px;
    display: none;
    @media only screen and (max-width: 1100px) {
        display: flex;
    }
`