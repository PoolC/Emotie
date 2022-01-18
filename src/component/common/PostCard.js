import styled from 'styled-components';
import { useState } from 'react';

import IconButton from './IconButton';
import EmotionTag from './EmotionTag';
import DropDown from './DropDown';
import { AiOutlineShareAlt, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiAlarmWarningLine, RiDeleteBinLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Alert from './modal/Alert';
import Reasons from './modal/Reasons';

import * as api from "../../utils/api";
import server from '../../utils/server';

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
    });

    const [reportInfo, setReportInfo] = useState({
        isOpen: false,
        title: "신고사유",
        options: ["부적절한 홍보글", "성적 또는 폭력적 내용", "명예훼손/사생활 침해"],
        firstButton: "신고",
        firstButtonFunc: reportAlert,
        secondButton: "취소"
    });
    const [reportReason, setReportReason] = useState(0);

    function setIsOpen(isOpen) {
        setAlertInfo({
            ...alertInfo,
            isOpen: isOpen
        });
    }

    function setReportOpen(isOpen) {
        if(isOpen) setReportReason(0);
        setReportInfo({
            ...reportInfo,
            isOpen: isOpen
        })
    }

    function reportAlert() {
        if(props.category === "diary") {
            api.reportDiary(props.post.diaryId, reportInfo.options[reportReason])
            .then(response => {
                setAlertInfo({
                    isOpen: true,
                    title: "마음글 신고 성공",
                    message: "신고가 완료되었습니다.",
                    firstButtonFunc: () => window.location.reload()
                });
            })
            .catch(error => {
                if(error.response && error.response.status === 404) {
                    setAlertInfo({
                        isOpen: true,
                        title: "마음글 신고 실패",
                        message: "해당 마음글이 존재하지 않습니다.",
                        firstButtonFunc: () => window.location.reload()
                    });     
                }   
            });
        }
        else if(props.category === "guestbook") {
            api.reportGuestbook(props.post.guestbookId, reportInfo.options[reportReason])
            .then(response => {
                setAlertInfo({
                    isOpen: true,
                    title: "방명록 신고 성공",
                    message: "신고가 완료되었습니다.",
                    firstButtonFunc: () => window.location.reload()
                });
            })
            .catch(error => {
                if(error.response && error.response.status === 404) {
                    setAlertInfo({
                        isOpen: true,
                        title: "방명록 신고 실패",
                        message: "해당 방명록이 존재하지 않습니다.",
                        firstButtonFunc: () => window.location.reload()
                    });
                }
            });
        }
    };

    function onShare(event) {
        event.stopPropagation();
        const url = `${window.location.host}/profile/post/${props.post.diaryId}`
        navigator.clipboard.writeText(url);
        setAlertInfo({
            isOpen: true,
            title: "마음글 공유 성공",
            message: "마음글 공유 url을 복사하였습니다."
        });
    }

    function onBlur(event) {
        event.stopPropagation();
        if(props.category === "diary") {
            setAlertInfo({
                isOpen: true,
                title: "마음글 숨기기",
                message: "정말 해당 마음글을 숨기시겠습니까?",
                firstButton: "숨기기",
                firstButtonFunc: blurAlert,
                secondButton: "취소"
            });
        }
    }

    function blurAlert() {
        api.blur(props.post.diaryId)
        .then(response => {
            setAlertInfo({
                isOpen: true,
                title: "마음글 숨기기 성공",
                message: "숨기기가 완료되었습니다.",
                firstButtonFunc: () => window.location.reload()
            });
        })
        .catch(error => {
            if(error.response && error.response.status === 404) {
                setAlertInfo({
                    isOpen: true,
                    title: "마음글 숨기기 실패",
                    message: "해당 마음글이 존재하지 않습니다.",
                    firstButtonFunc: () => window.location.reload()
                }); 
            }   
        });
    }

    function onReport(event) {
        event.stopPropagation();
        setReportOpen(true);
    }

    function onDelete(event) {
        event.stopPropagation();
        if(props.category === "diary") {
            setAlertInfo({
                isOpen: true,
                title: "마음글 삭제",
                message: "정말 해당 마음글을 삭제하시겠습니까?",
                firstButton: "삭제",
                firstButtonFunc: deleteDiaryAlert,
                secondButton: "취소"
            });
        }
        else if(props.category === "guestbook") {
            setAlertInfo({
                isOpen: true,
                title: "방명록 삭제",
                message: "정말 해당 방명록을 삭제하시겠습니까?",
                firstButton: "삭제",
                firstButtonFunc: deleteGuestbookAlert,
                secondButton: "취소"
            });
        }
    }

    function deleteDiaryAlert() {
        api.deleteDiary(props.post.diaryId)
        .then(response => {
            setAlertInfo({
                isOpen: true,
                title: "마음글 삭제 성공",
                message: "삭제가 완료되었습니다.",
                firstButtonFunc: () => window.location.reload()
            });
        })
        .catch(error => {
            if(error.response && error.response.status === 404) {
                setAlertInfo({
                    isOpen: true,
                    title: "마음글 삭제 실패",
                    message: "해당 마음글이 존재하지 않습니다.",
                    firstButtonFunc: () => window.location.reload()
                });       
            }   
        });
    }

    function deleteGuestbookAlert() {
        api.deleteGuestbook(props.post.guestbookId)
        .then(response => {
            setAlertInfo({
                isOpen: true,
                title: "방명록 삭제 성공",
                message: "삭제가 완료되었습니다.",
                firstButtonFunc: () => window.location.reload()
            });
        })
        .catch(error => {
            if(error.response && error.response.status === 404) {
                setAlertInfo({
                    isOpen: true,
                    title: "방명록 삭제 실패",
                    message: "해당 방명록이 존재하지 않습니다.",
                    firstButtonFunc: () => window.location.reload()
                });
            }
        });
    }

    return (
        <Wrapper>
            {props.post &&
            <Container borderColor={props.post.emotion?.color || "#FFFFFF"} onClick={props.onClick}>
                <Info>
                    {props.post.emotion && <EmotionTag emotion={props.post.emotion}/>}
                    <Nickname hideEmotion={!props.post.emotion}>{props.post.nickname}</Nickname>
                    <Date>{props.post.date}</Date>
                </Info>
                <Content>{props.post.content}</Content>
                <Icons>
                    {props.share && <IconButton icon={AiOutlineShareAlt} size="1.2rem" color="#7E7E7E" onClick={onShare}/>}
                    {props.blur && <IconButton icon={AiOutlineEyeInvisible} size="1.2rem" color="#7E7E7E" onClick={onBlur}/>}
                    {props.report && <IconButton icon={RiAlarmWarningLine} size="1.2rem" color="#7E7E7E" onClick={onReport}/>}
                    {props.delete && <IconButton icon={RiDeleteBinLine} size="1.2rem" color="#7E7E7E" onClick={onDelete}/>}
                </Icons>
            </Container>
            }
            {/* 모달 */}
            {(props.share || props.blur || props.report || props.delete) && <DropDownContainer><DropDown options={options} icon={BiDotsHorizontalRounded} id={props.post?.diaryId}/></DropDownContainer>}
            <Alert title={alertInfo.title} message={alertInfo.message} isOpen={alertInfo.isOpen} setOpen={setIsOpen} firstButton={alertInfo.firstButton} firstButtonFunc={alertInfo.firstButtonFunc} secondButton={alertInfo.secondButton} secondButtonInfo={alertInfo.secondButtonFunc}/>
            <Reasons title={reportInfo.title} options={reportInfo.options} isOpen={reportInfo.isOpen} setOpen={setReportOpen} firstButton={reportInfo.firstButton} firstButtonFunc={reportInfo.firstButtonFunc} secondButton={reportInfo.secondButton} reportReason={reportReason} setReportReason={setReportReason}/>
        </Wrapper>
    );
}

export default PostCard;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
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

    @media only screen and (max-width: 768px) {
        padding: 20px 25px;
    }
`

const Info = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: 5px;
    }
`

const Nickname = styled.span`
    flex: 1 0 0;
    margin-left: ${props => props.hideEmotion ? `0` : `20px`};
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;

    @media only screen and (max-width: 768px) {
        margin-left: unset;
    }
`

const Date = styled.span`
    font-size: 0.85rem;
    color: #ffffff;
`

const Content = styled.p`
    display: -webkit-box;
    margin: 0;
    width: 80%;
    font-size: 0.9rem;
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