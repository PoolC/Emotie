import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Body, TagContainer, Tag, TextSection, TextArea, CheckSection, CheckLabel, CheckBox, CheckIcon, ButtonSection } from "./style";
import EmotionTag from "../../common/EmotionTag";
import Header from "../../common/Header";
import PillButton from "../../common/PillButton";

const emotions = [{color:"#FFF27D", tag:"기쁨", key:"happy"}, {color:"#FF855E", tag:"화남", key:"angry"}, {color:"#9FA7EF", tag:"슬픔", key:"sad"}, {color:"#AEE477", tag:"놀람", key:"surprised"}, {color:"#9431A4", tag:"질투", key:"jealous"}, {color:"#F29CB6", tag:"설렘", key:"flutter"}, {color:"#FFFFFF", tag:"무난", key:"normal"}, {color:"#ADADAD", tag:"지침", key:"tired"}];

function WritePage(props) {
    const { id } = useParams();
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
        // 등록
        if(tagId === null) {
            console.log("등록실패");
        }
        else {
            console.log("등록성공");
            console.log(tagId);
            console.log(content);
            console.log(isPrivate);
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
                    <CheckSection onClick={() => setPrivate(!isPrivate)}>
                        <CheckLabel>비공개 처리</CheckLabel>
                        <CheckBox>
                            <CheckIcon visibility={isPrivate ? "visible" : "hidden"}/>
                        </CheckBox>
                    </CheckSection>
                </TextSection>
                <ButtonSection>
                    <PillButton children="등록" onClick={uploadPost}/>
                    <PillButton negative children="취소" onClick={() => props.history.goBack()}/>
                </ButtonSection>
            </Body>
        </Container>
    );
}

export default WritePage;