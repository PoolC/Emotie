import React, { useState } from "react";

import emotions from "@utils/Emotions";
import { Container, Body, TagContainer, Tag, TextSection, TextArea, CheckBoxContainer, ButtonSection } from "./style";
import EmotionTag from "@common/widget/EmotionTag";
import Header from "@common/widget/Header";
import PillButton from "@common/button/PillButton";
import CheckBox from "@common/input/CheckBox";
import Alert from "@common/modal/Alert";

import * as api from "@utils/api";

function WritePage(props) {
    const [ isPrivate, setPrivate ] = useState(false);
    const [ content, setContent ] = useState("");
    const [ tagState, setTagState ] = useState({
        happy: false,
        angry: false,
        sad: false,
        surprised: false,
        jealous: false,
        flutter: false,
        normal: false,
        tired: false
    });
    const [ tagId, setTagId ] = useState(null);
    const [ selectEmotionOpen, setSelectEmotionOpen ] = useState(false);
    const [ submitOpen, setSubmitOpen ] = useState(false);

    const tagClick = (id, key) => {
        const defaultState = ({
            happy: false,
            angry: false,
            sad: false,
            surprised: false,
            jealous: false,
            flutter: false,
            normal: false,
            tired: false
        });
        setTagState({ ...defaultState, [key]: true});
        setTagId(id);
    };

    const uploadPost = () => {
        // 마음글 등록
        if(tagId === null) {
            setSelectEmotionOpen(true);
        }
        else {
            api.uploadPost(emotions[tagId].tag, content, !isPrivate)
            .then(response => {
                console.log(response.data);
                setSubmitOpen(true);
            })
            .catch(error => {
                error.response && console.log(error.response.status);
            });
        }
    };

    const tags = emotions.map((emotion, index) => (
        <Tag key={index} tagState={tagState[emotion.key]} onClick={() => tagClick(index, emotion.key)}>
            <EmotionTag write emotion={emotion}/>
        </Tag>
    ));
    
    return (
        <Container>
            <Header recommend feed/>
            <Body>
                <TagContainer>
                    {tags}
                </TagContainer>
                <TextSection>
                    <TextArea onChange={(event) => setContent(event.target.value)}/>
                    <CheckBoxContainer>
                        <CheckBox label="비공개" checked={isPrivate} onClick={() => setPrivate(!isPrivate)}/>
                    </CheckBoxContainer>
                </TextSection>
                <ButtonSection>
                    <PillButton children="등록" onClick={uploadPost}/>
                    <PillButton negative children="취소" onClick={() => props.history.goBack()}/>
                </ButtonSection>
            </Body>
            {/* 모달 */}
            <Alert title="감정 미선택" message="감정을 선택해주세요." isOpen={selectEmotionOpen} setOpen={setSelectEmotionOpen}/>
            <Alert title="마음글 작성 성공" message="마음글이 성공적으로 작성되었습니다." isOpen={submitOpen} setOpen={setSubmitOpen} firstButtonFunc={() => props.history.goBack()}/>
        </Container>
    );
}

export default WritePage;