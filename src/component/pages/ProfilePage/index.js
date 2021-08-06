import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Emotions from "../../../utils/Emotions";

import { 
    Container, MotieLayout, ContentLayout, 
    HeaderLayout, Nickname, Description,
    FollowerLayout, State,
    PostLayout, CategoryLayout, Category, PostList
} from "./style";
import MotieFrame from "../../common/MotieFrame";
import PillShadowButton from "../../common/PillShadowButton";
import PostCard from "../../common/PostCard";

function ProfilePage(props) {
    const { id } = useParams();

    const [isMyProfile, setMyProfile] = useState(true);
    const [isEditMode, setEditMode] = useState(false);

    const [nickname, setNickname] = useState('');
    const [previousNickname, setPreviousNickname] = useState('');
    const [description, setDescription] = useState('');
    const [previousDescription, setPreviousDescription] = useState('');

    const [category, setCategory] = useState(0);
    const [postList, setPostList] = useState([]);
    const [guestbookList, setGuestbookList] = useState([]);

    useEffect(() => {
        // 임시 정보
        setNickname(id);
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

    // 클릭 이벤트
    const follow = () => {
        // 서버 작업
    };
    const write = () => {};
    const startEditMode = () => {
        setPreviousNickname(nickname);
        setPreviousDescription(description);
        setEditMode(true);
    };
    const stopEditMode = (save) => {
        if (save) {
            // 서버 작업
        }
        else {
            setNickname(previousNickname);
            setDescription(previousDescription);
        }
        setEditMode(false);
    };
    const onNicknameChange = (event) => setNickname(event.target.value);
    const onDescriptionChange = (event) => setDescription(event.target.value);

    return (
        <Container emotion={Emotions.SURPRISED}>
            <MotieLayout>
                <MotieFrame emotion={Emotions.SURPRISED}/>
            </MotieLayout>
            <ContentLayout>
                <HeaderLayout>
                    <Nickname value={nickname} size={nickname.length} onChange={onNicknameChange} disabled={!isEditMode}/>
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
                        : <PillShadowButton width="100px" onClick={follow}>구독하기</PillShadowButton>
                    }
                </HeaderLayout>
                <Description value={description} onChange={onDescriptionChange} disabled={!isEditMode}/>
                <FollowerLayout isEditMode={isEditMode}>
                    <State>팔로워 12</State>
                    <State>팔로잉 15</State>
                </FollowerLayout>
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
                </PostLayout>
            </ContentLayout>
        </Container>
    );
}

export default ProfilePage;