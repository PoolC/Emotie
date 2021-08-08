import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import Emotions from "../../../utils/Emotions";

import { 
    Container, 
    MotieLayout, ContentLayout, 
    InfoLayout, Nickname, Description, DescriptionCount,
    MenuLayout,
    FollowerLayout, State,
    PostLayout, CategoryLayout, Category, PostList,
    InputLayout, PillInputWrapper
} from "./style";
import Header from "../../common/Header";
import MotieFrame from "../../common/MotieFrame";
import PillShadowButton from "../../common/PillShadowButton";
import PostCard from "../../common/PostCard";
import PillInput from "../../common/PillInput";
import IconButton from "../../common/IconButton";
import { IoPencil } from "react-icons/io5";

function ProfilePage(props) {
    const { id } = useParams();

    const [isMyProfile, setMyProfile] = useState(true);
    const [isEditMode, setEditMode] = useState(false);

    const [description, setDescription] = useState('');
    const [previousDescription, setPreviousDescription] = useState('');

    const [category, setCategory] = useState(0);
    const [postList, setPostList] = useState([]);
    const [guestbookList, setGuestbookList] = useState([]);

    useEffect(() => {
        // 임시 정보
        setDescription('자기소개는 언제나 어려워\n두 줄만 들어가려면 몇 글자 정도여야하는지 모르겠네요 스크롤 생기는 거 싫은데');
        setMyProfile(true);
        // 임시 글 & 방명록
        setPostList([
            {emotion: Emotions.HAPPY},
            {emotion: Emotions.SAD}, 
            {emotion: Emotions.FLUTTER}, 
            {emotion: Emotions.NORMAL}]);
        setGuestbookList([
            {nickname: '노원구 오함마', content: '요즘 힘들어 보이던데 힘내세요'}, 
            {nickname: '닉네임', content: '내용'}, 
            {nickname: '닉네임2', content: '구독하고 갑니다'}, 
            {nickname: '닉네임3', content: '테스트'}]);
    }, [id]);

    // 미디어 쿼리
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 클릭 이벤트
    const follow = () => {
        // 서버 작업
    };
    const write = () => props.history.push(`/profile/${id}/write`);
    const startEditMode = () => {
        setPreviousDescription(description);
        setEditMode(true);
    };
    const stopEditMode = (save) => {
        if (save) {
            // 서버 작업
        }
        else {
            setDescription(previousDescription);
        }
        setEditMode(false);
    };

    // 이벤트 감지
    const onDescriptionChange = (event) => setDescription(event.target.value);

    return (
        <Container emotion={Emotions.SURPRISED}>
            {/* 헤더 */}
            <Header transparent recommend feed/>
            {/* 모티 */}
            <MotieLayout>
                <MotieFrame emotion={Emotions.SURPRISED}/>
            </MotieLayout>
            {/* 내용 */}
            <ContentLayout>
                <InfoLayout>
                    <Nickname isEditMode={isEditMode}>{id}</Nickname>
                    <Description value={description} maxLength="100" onChange={onDescriptionChange} disabled={!isEditMode}/>
                    <DescriptionCount isEditMode={isEditMode}>{description.length} / 100</DescriptionCount>
                </InfoLayout>
                <MenuLayout>
                    {isMyProfile 
                        ? <>{isEditMode 
                            ? <>
                                <PillShadowButton width="100px" onClick={() => stopEditMode(false)} negative>취소</PillShadowButton>
                                <PillShadowButton width="100px" onClick={() => stopEditMode(true)}>완료</PillShadowButton>
                            </>
                            : <>
                                <PillShadowButton width="100px" onClick={write} negative>마음글 쓰기</PillShadowButton>
                                <PillShadowButton width="100px" onClick={startEditMode}>프로필 수정</PillShadowButton>
                            </>
                        }</>
                        : <PillShadowButton width="100px" onClick={follow}>팔로우</PillShadowButton>
                    }
                </MenuLayout>
                {isMyProfile && 
                    <FollowerLayout isEditMode={isEditMode}>
                        <State>팔로워 12</State>
                        <State>팔로잉 15</State>
                    </FollowerLayout>
                }
                <PostLayout isEditMode={isEditMode}>
                    <CategoryLayout>
                        <Category onClick={() => setCategory(0)} selected={category === 0}>마음글</Category>
                        <Category onClick={() => setCategory(1)} selected={category === 1}>방명록</Category>
                    </CategoryLayout>
                    <PostList>
                        {category === 0 
                            ? postList.map((post, index) => 
                                isMyProfile 
                                    ? <PostCard key={index} emotion={post.emotion} share delete/>
                                    : <PostCard key={index} emotion={post.emotion} share blur report/>)
                            : guestbookList.map((post, index) => 
                                isMyProfile
                                    ? <PostCard key={index} nickname={post.nickname} content={post.content} hideEmotion report delete/>
                                    : <PostCard key={index} nickname={post.nickname} content={post.content} hideEmotion/>)}
                    </PostList>
                    {category === 1 && 
                        <InputLayout>
                            <PillInputWrapper><PillInput width="100%" placeholder="방명록을 남기세요"/></PillInputWrapper>
                            <IconButton icon={IoPencil} color={isMobile ? "white" : "black"} size="1.5rem"/>
                        </InputLayout>
                    }
                </PostLayout>
            </ContentLayout>
        </Container>
    );
}

export default ProfilePage;