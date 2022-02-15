import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { Container, Profile, Post, ProfileWrapper, ProfileButton, Wrapper, Info, Nickname, Date, Content, UrlArea} from "./style";
import Header from "@common/widget/Header";
import EmotionTag from '@common/widget/EmotionTag';
import IconButton from '@common/button/IconButton';
import { AiOutlineShareAlt } from "react-icons/ai";
import Alert from "@common/modal/Alert";
import Progress from "@common/modal/Progress";

import * as api from "@utils/api";

function DetailPage(props) {
    const { postId } = useParams();
    const [loading, setLoading] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    // const [diary, setDiary] = useState(true);
    const [diary, setDiary] = useState(false);

    const [nickname, setNickname] = useState('공릉동 공룡');
    const [date, setDate] = useState('1999-09-03');
    const [content, setContent] = useState('기본 콘텐츠 내용');
    const [emotion, setEmotion] = useState('');
    const [memberId, setMemberId] = useState("");
    const [backgroundColor, setBackgroundColor] = useState('');




    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');
    const [copyOpen, setCopyOpen] = useState(false);


    const [share, setShare] = useState(false);

    const goFeedPage = () => props.history.push('/feed');
    const goProfilePage = () => props.history.push(`/profile/${memberId}`);

    const url = React.useRef();

    async function FetchDiary() {
        try {
            setLoading(true);
            setFullscreen(true);
            const response = await api.getDiary(postId);
            setNickname(response.data.nickname);
            setEmotion(response.data.emotion);
            setContent(response.data.content);
            setDate(response.data.date);
            setMemberId(response.data.memberId);
            setBackgroundColor(response.data.emotion.color);

            setLoading(false);
            setFullscreen(false);
            setDiary(true);
        }
        catch (error) {
            setLoading(false);
            setFullscreen(false);
            if (error.response) {
                if (error.response.status === 403) {
                    setAlertTitle(error.response.status);
                    setAlertMsg('비공개 게시물입니다');
                    setOpen(true);
                } else if (error.response.status === 404) {
                    setAlertTitle(error.response.status);
                    setAlertMsg('존재하지 않는 게시물입니다');
                    setOpen(true);
                } else {
                    setAlertTitle(error.response.status);
                    setAlertMsg('알 수 없는 에러가 발생했습니다.');
                    setOpen(true);
                }
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못함
                setAlertTitle('에러');
                setAlertMsg('서버에서 응답이 오지 않습니다.');
                setOpen(true);
            }
            else {
                setAlertTitle('에러');
                setAlertMsg('알 수 없는 에러가 발생했습니다.');
                setOpen(true);
            }
        }
    }
    useEffect(() => {
        FetchDiary(postId);
    }, []);
    
    return (
        <Container>
            <Header></Header>
            {diary &&
                <>
                    <Profile backgroundColor={backgroundColor}>
                        <ProfileWrapper>
                            <ProfileButton children="프로필 가기" onClick={goProfilePage}></ProfileButton>
                        </ProfileWrapper>
                    </Profile>
                    <Wrapper>
                        <Post>
                            <Info>
                                <EmotionTag emotion={emotion} />
                                <Nickname>{nickname}</Nickname>
                                <Date>{date}</Date>
                            </Info>
                            <Content>{content}</Content>
                            <IconButton icon={AiOutlineShareAlt} size="1.2rem" color="#7E7E7E" onClick={onShare} />
                        </Post>
                    </Wrapper>
                </>
            }
            <Progress isInProgress={loading} fullscreen={fullscreen} />
            <Alert isOpen={isOpen} message={alertMsg} title={alertTitle} setOpen={setOpen} firstButtonFunc={goFeedPage}></Alert>
            <Alert isOpen={copyOpen} message="게시물 링크가 클립보드에 복사되었습니다" setOpen={setCopyOpen}></Alert>
            {share&&<UrlArea ref={url} value={window.document.location.href}></UrlArea>}
        </Container>
    );
    async function onShare() {
        await setShare(true);
        url.current.select();
        document.execCommand('copy');
        url.current.blur();

        setCopyOpen(true);
    }
}
export default DetailPage;