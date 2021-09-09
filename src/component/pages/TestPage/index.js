import React, { useState } from "react";
import { connect } from "react-redux";
import { updateToken, deleteToken } from "../../../utils/store/actions/auth";

import Emotions from "../../../utils/Emotions";

import { Container, LoginContainer, LoginToken, PostList, ProfileList } from "./style";
import FloatingButton from "../../common/FloatingButton";
import Header from "../../common/Header";
import IconButton from "../../common/IconButton";
import PillButton from "../../common/PillButton";
import PostCard from "../../common/PostCard";
import ProfileCard from "../../common/ProfileCard";
import { IoPersonOutline } from "react-icons/io5";

import Alert from "../../common/modal/Alert";

function TestPage(props) {
    const [isAlertOpen, setAlertOpen] = useState(false);

    return (
        <Container>
            {/* 헤더 */}
            <Header search recommend feed/>
            {/* 내용 */}
            <FloatingButton icon={IoPersonOutline}/>
            <IconButton icon={IoPersonOutline}/>
            <PillButton onClick={() => setAlertOpen(true)}>테스트</PillButton>
            <PillButton negative>테스트</PillButton>
            <LoginContainer>
                <LoginToken>현재 토큰 : {props.token}</LoginToken>
                <PillButton width="200px" negative onClick={() => { props.updateToken('user-1-token') }}>사용자 1으로 로그인</PillButton>
                <PillButton width="200px" negative onClick={() => { props.updateToken('user-2-token') }}>사용자 2으로 로그인</PillButton>
                <PillButton width="200px" negative onClick={props.deleteToken}>로그아웃</PillButton>
            </LoginContainer>
            <PostList>
                <PostCard hideEmotion share blur report delete id={1}/>
                <PostCard hideEmotion share blur report id={2}/>
                <PostCard hideEmotion share blur id={3}/>
                <PostCard hideEmotion share blur report delete id={4}/>
                <PostCard hideEmotion share blur report id={5}/>
                <PostCard hideEmotion share blur report delete id={6}/>
                <PostCard emotion={Emotions.SAD} share blur report delete id={7}/>
            </PostList>
            <ProfileList>
                <ProfileCard/>
                <ProfileCard emotion={Emotions.HAPPY}/>
                <ProfileCard emotion={Emotions.SAD}/>
                <ProfileCard emotion={Emotions.JEALOUS}/>
                <ProfileCard emotion={Emotions.FLUTTER}/>
                <ProfileCard emotion={Emotions.SURPRISED}/>
                <ProfileCard emotion={Emotions.TIRED}/>
                <ProfileCard emotion={Emotions.ANGRY}/>
            </ProfileList>
            {/* 모달 */}
            <Alert title="테스트 제목" message="테스트 Alert입니다." isOpen={isAlertOpen} setOpen={setAlertOpen}/>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
});
const mapDispatchToProps = (dispatch) => ({
    updateToken: (token) => dispatch(updateToken(token)),
    deleteToken: () => dispatch(deleteToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);