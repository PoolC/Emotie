import React, { useState, useCallback } from "react";

import * as api from "../../../utils/api";

import { 
    BaseLayout,
    MotieLayout, MotieEditWrapper, 
    ContentLayout, ProfileLayout, 
    InfoLayout, Nickname, DescriptionWrapper, Description, DescriptionCount, 
    MenuLayout, StateLayout, State,
    CategoryLayout, Category, 
    InputLayout, Input,
    PostList,
    Boundary
} from "./style";
import Header from "../../common/Header";
import MotieFrame from "../../common/MotieFrame";
import PillShadowButton from "../../common/PillShadowButton";
import PostCard from "../../common/PostCard";
import IconButton from "../../common/IconButton";
import { IoPencil } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return <BaseLayout backgroundColor={props.backgroundColor}>{props.children}</BaseLayout>
    },
    Content: function(props) {
        return <ContentLayout>{props.children}</ContentLayout>
    },
    Profile: function(props) {
        return <ProfileLayout backgroundColor={props.backgroundColor}>{props.children}</ProfileLayout>
    },
};

export const Group = {
    Motie: function(props) {
        return (
            <MotieLayout>
                {props.isEditable && <MotieEditWrapper><PillShadowButton>모티 꾸미기</PillShadowButton></MotieEditWrapper>}
                <MotieFrame motie={props.motie} motieItems={props.motieItems}/>
            </MotieLayout>
        );
    },
    Info: function(props) {
        const INTRODUCTION_MAX_LENGTH = 100;

        const onIntroductionChange = useCallback((event) => {
            props.setTempIntroduction(event.target.value);
            event.target.style.height = 'inherit';
            event.target.style.height = `${event.target.scrollHeight}px`;
            // eslint-disable-next-line
        }, []);

        return (
            <InfoLayout>
                <Nickname isEditable={props.isEditable}>{props.nickname}</Nickname>
                <DescriptionWrapper isEditable={props.isEditable}><Description value={props.introduction} maxLength={INTRODUCTION_MAX_LENGTH} onChange={onIntroductionChange} disabled={!props.isEditable}/></DescriptionWrapper>
                <DescriptionCount isEditable={props.isEditable}>{props.introduction.length} / {INTRODUCTION_MAX_LENGTH}</DescriptionCount>
            </InfoLayout>
        );
    },
    State: function(props) {
        return (props.isProfileMine && 
            <StateLayout isEditable={props.isEditable}>
                <State>팔로워 {props.follower.length}명</State>
                <State>팔로잉 {props.followee.length}명</State>
            </StateLayout>
        );
    },
    Menu: function(props) {
        return (
            <MenuLayout>{props.isProfileMine 
                ? <>{props.isEditable 
                    ? <>
                        <PillShadowButton width="100px" onClick={props.cancelEdit} negative>취소</PillShadowButton>
                        <PillShadowButton width="100px" onClick={props.saveEdit}>완료</PillShadowButton>
                    </>
                    : <>
                        <PillShadowButton width="100px" onClick={props.write} negative>마음글 작성</PillShadowButton>
                        <PillShadowButton width="100px" onClick={props.startEdit}>프로필 수정</PillShadowButton>
                    </>
                }</>
                : <PillShadowButton width="100px" onClick={props.toggleFollow}>{props.isFollowed ? "언팔로우" : "팔로우"}</PillShadowButton>}
            </MenuLayout>
        );
    },
    Category: function(props) {
        return (
            <CategoryLayout isEditable={props.isEditable}>
                <Category onClick={() => props.setCategory(0)} selected={props.category === 0}>마음글</Category>
                <Category onClick={() => props.setCategory(1)} selected={props.category === 1}>방명록</Category>
            </CategoryLayout>
        );
    },
    GuestbookInput: function(props) {
        const [input, setInput] = useState('');
        const onInputChange = useCallback(event => setInput(event.target.value));
        const uploadGuestbook = () => {
            api.uploadGuestbook(props.memberId, input)
            .then(response => {
                // TODO : update
                setInput('');
            })
            .catch(error => props.showErrorAlert());
        }

        return (props.category === 1 && !props.isProfileMine && 
            <InputLayout isEditable={props.isEditable}>
                <Input width="100%" placeholder="방명록을 남기세요" value={input} onChange={onInputChange} disabled={props.isEditable}/>
                <IconButton icon={IoPencil} color="white" size="1rem" onClick={uploadGuestbook}/>
            </InputLayout>
        );
    },
    Post: function(props) {
        const options = {
            share: props.category === 0,
            blur: false,
            report: (props.category === 0 && !props.isProfileMine) || props.category === 1,
            delete: props.category === 0 && props.isProfileMine
        };
        return (
            <PostList category={props.category} isEditable={props.isEditable}>
                {props.category === 0 
                ? props.diaries.map((post, index) => <PostCard key={index} category="diary" post={post} {...options}/>)
                : props.guestbooks.map((post, index) => <PostCard key={index} category="guestbook" post={post} {...options}/>)}
            </PostList>
        );
    },
};

export const Element = {
    Header: function() {
        return <Header transparent recommend feed/>;
    },
    Boundary: function(props) {
        return <Boundary backgroundColor={props.backgroundColor} top={props.top} bottom={props.bottom}/>
    },
};