import React, { useState, useCallback, forwardRef } from "react";

import { 
    BaseLayout,
    MotieLayout, MotieFrameFlex, MotieSelector,
    ContentLayout, ProfileLayout, 
    InfoLayout, Nickname, DescriptionWrapper, Description, DescriptionCount, 
    MenuLayout, StateLayout, State,
    CategoryLayout, Category, 
    InputLayout, Input,
    PostList,
    Boundary
} from "./style";
import Header from "../../common/widget/Header";
import MotieFrame from "../../common/frame/MotieFrame";
import PillShadowButton from "../../common/button/PillShadowButton";
import PostCard from "../../common/card/PostCard";
import IconButton from "../../common/button/IconButton";
import { IoPencil } from "react-icons/io5";

import MotieCard from "../../common/frame/MotieCard";

export const Container = {
    Base: function(props) {
        return <BaseLayout backgroundColor={props.backgroundColor}>{props.children}</BaseLayout>
    },
    Content: function(props) {
        return <ContentLayout id="content">{props.children}</ContentLayout>
    },
    Profile: function(props) {
        return <ProfileLayout backgroundColor={props.backgroundColor}>{props.children}</ProfileLayout>
    },
};

export const Group = {
    Motie: function(props) {
        return (
            <MotieLayout>
                <MotieFrameFlex>
                    <MotieFrame motie={props.motie} emotion={props.emotion}/>
                </MotieFrameFlex>
                <MotieSelector isEditable={props.isEditable}>
                    <MotieCard motie="dust" selected={props.motie === "dust"} onClick={() => props.setTempMotie("dust")}/>
                    <MotieCard motie="dust2" selected={props.motie === "dust2"} onClick={() => props.setTempMotie("dust2")}/>
                    <MotieCard motie="bear" selected={props.motie === "bear"} onClick={() => props.setTempMotie("bear")}/>
                    <MotieCard motie="cat" selected={props.motie === "cat"} onClick={() => props.setTempMotie("cat")}/>
                    <MotieCard motie="dog" selected={props.motie === "dog"} onClick={() => props.setTempMotie("dog")}/>
                    <MotieCard motie="heart" selected={props.motie === "heart"} onClick={() => props.setTempMotie("heart")}/>
                    <MotieCard motie="slime" selected={props.motie === "slime"} onClick={() => props.setTempMotie("slime")}/>
                </MotieSelector>
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
        const changeCategory = (category) => {
            document.getElementById('content').scrollTo(0, 0);
            props.resetPageCount();
            props.history.replace(`${window.location.pathname}?category=${category}`);
        };

        return (
            <CategoryLayout isEditable={props.isEditable}>
                <Category onClick={() => changeCategory('diary')} selected={props.category !== 'guestbook'}>마음글</Category>
                <Category onClick={() => changeCategory('guestbook')} selected={props.category === 'guestbook'}>방명록</Category>
            </CategoryLayout>
        );
    },
    GuestbookInput: function(props) {
        const [input, setInput] = useState('');
        const onInputChange = useCallback(event => setInput(event.target.value), []);
        const writeGuestbook = () => {
            props.uploadGuestbook(input);
            setInput('');
        }

        return (props.category === 'guestbook' && !props.isProfileMine && 
            <InputLayout isEditable={props.isEditable}>
                <Input width="100%" placeholder="방명록을 남기세요" value={input} onChange={onInputChange} disabled={props.isEditable}/>
                <IconButton icon={IoPencil} color="white" size="1rem" onClick={writeGuestbook}/>
            </InputLayout>
        );
    },
    Post: function(props) {
        const options = {
            share: props.category !== 'guestbook',
            blur: false,
            report: (props.category !== 'guestbook' && !props.isProfileMine) || props.category === 'guestbook',
            delete: props.category !== 'guestbook' && props.isProfileMine
        };
        
        return (
            <PostList category={props.category} isProfileMine={props.isProfileMine} isEditable={props.isEditable}>
                {props.category !== 'guestbook' 
                ? props.diaries.map((post, index) => <PostCard key={props.memberId + index + 'd'} category="diary" post={post} onClick={() => props.showDiaryPopup(index)} {...options}/>)
                : props.guestbooks.map((post, index) => <PostCard key={props.memberId + index + 'g'} category="guestbook" post={post} onClick={() => props.showGuestbookPopup(index)} {...options}/>)}
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
    LoadTrigger: forwardRef(function(_props, ref) {
        return <div ref={ref}/>
    }),
};