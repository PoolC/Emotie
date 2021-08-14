import React from "react";

import Emotions from "../../../utils/Emotions";

import { Container, PostList, ProfileList } from "./style";
import FloatingButton from "../../common/FloatingButton";
import Header from "../../common/Header";
import IconButton from "../../common/IconButton";
import PillButton from "../../common/PillButton";
import PostCard from "../../common/PostCard";
import ProfileCard from "../../common/ProfileCard";
import { IoPersonOutline } from "react-icons/io5";

function LandingPage(props) {
    return (
        <Container>
            {/* 헤더 */}
            <Header search recommend feed/>
            {/* 내용 */}
            <FloatingButton icon={IoPersonOutline}/>
            <IconButton icon={IoPersonOutline}/>
            <PillButton>테스트</PillButton>
            <PillButton negative>테스트</PillButton>
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
        </Container>
    );
}

export default LandingPage;