import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import server from "../../../utils/server";
import Emotions from "../../../utils/Emotions";

import { Container, Group, Element } from "./component";

function ProfilePage(props) {
    const { id } = useParams();

    const [isMyProfile, setMyProfile] = useState(true);
    const [isEditMode, setEditMode] = useState(false);

    const [emotion, setEmotion] = useState();
    const [description, setDescription] = useState('');
    const [previousDescription, setPreviousDescription] = useState('');

    const [category, setCategory] = useState(0);
    const [postList, setPostList] = useState([]);
    const [guestbookList, setGuestbookList] = useState([]);

    useEffect(() => {
        // 임시 정보
        setMyProfile(true);
        setEmotion(Emotions.SAD);
        setDescription('자기소개는 언제나 어려워\n두 줄만 들어가려면 몇 글자 정도여야하는지 모르겠네요 스크롤 생기는 거 싫은데');
        setPostList([{emotion: Emotions.HAPPY}, {emotion: Emotions.SAD}, {emotion: Emotions.FLUTTER}, {emotion: Emotions.NORMAL}]);
        setGuestbookList([{nickname: '노원구 오함마', content: '요즘 힘들어 보이던데 힘내세요'}, {nickname: '닉네임', content: '내용'}, {nickname: '닉네임2', content: '구독하고 갑니다'}, {nickname: '닉네임3', content: '테스트'}, , {nickname: '닉네임3', content: '테스트'}, , {nickname: '닉네임3', content: '테스트'}]);
    }, [id]);

    // 클릭 이벤트
    const write = () => props.history.push(`/profile/${id}/write`);
    const startEditMode = () => {
        setPreviousDescription(description);
        setEditMode(true);
    };
    const stopEditMode = (save) => {
        if (save) {
            server
            .put('/profiles', {
                nickname: '공릉동 공룡', //TODO
                introduction: description
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        }
        else setDescription(previousDescription);
        setEditMode(false);
    };
    const follow = () => {
        server
        .post(`/members/follow/${id}`, {
            isFollowing: true
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };

    // 이벤트 감지
    const onDescriptionChange = (event) => setDescription(event.target.value);

    return (
        <Container.Base emotion={emotion}>
            {/* 헤더 */}
            <Element.Header/>
            {/* 모티 */}
            <Container.Motie>
                <Element.Motie emotion={emotion}/>
            </Container.Motie>
            {/* 내용 */}
            <Container.Content>
                <Container.Profile backgroundColor={emotion?.color}>
                    <Group.Info nickname={id} description={description} onDescriptionChange={onDescriptionChange} isEditMode={isEditMode} />
                    <Group.State isMyProfile={isMyProfile} isEditMode={isEditMode}/>
                    <Group.Menu isMyProfile={isMyProfile} isEditMode={isEditMode} startEditMode={startEditMode} stopEditMode={stopEditMode} write={write} follow={follow}/>
                    <Group.Category category={category} setCategory={setCategory} isEditMode={isEditMode}/>
                    <Group.GuestbookInput category={category} isEditMode={isEditMode}/>
                </Container.Profile>
                <Group.Post category={category} postList={postList} guestbookList={guestbookList} isMyProfile={isMyProfile} isEditMode={isEditMode}/>
            </Container.Content>
            {/* 바운더리 */}
            <Element.Boundary backgroundColor={emotion?.color} top/>
            <Element.Boundary backgroundColor={emotion?.color} bottom/>
        </Container.Base>
    );
}

export default ProfilePage;