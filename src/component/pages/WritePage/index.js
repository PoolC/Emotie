import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Body, TagContainer, Tag, TextSection, TextArea, CheckSection, CheckLabel, CheckBox, CheckIcon, ButtonSection } from "./style";
import EmotionTag from "../../common/EmotionTag";
import Header from "../../common/Header";
import PillButton from "../../common/PillButton";

const emotions = [{color:"#FFF27D", tag:"기쁨", key:"happy"}, {color:"#FF855E", tag:"화남", key:"angry"}, {color:"#9FA7EF", tag:"슬픔", key:"sad"}, {color:"#AEE477", tag:"놀람", key:"surprised"}, {color:"#9431A4", tag:"질투", key:"jealous"}, {color:"#F29CB6", tag:"설렘", key:"flutter"}, {color:"#FFFFFF", tag:"무난", key:"normal"}, {color:"#ADADAD", tag:"지침", key:"tired"}];

function WritePage(props) {
    const { id } = useParams();
    const [ isprivate, setPrivate ] = useState(false);
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
    const tagClick = (key) => {
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
    };
    const tags = emotions.map((emotion, index) => (
        <Tag key={emotion.key} tagState={tagState[emotion.key]} onClick={() => tagClick(emotion.key)}>
            <EmotionTag write emotion={emotion}/>
        </Tag>
    ));
    
    return (
        <Container>
            <Header/>
            <Body>
                <TagContainer>
                    {tags}
                </TagContainer>
                <TextSection>
                    <TextArea/>
                    <CheckSection onClick={() => setPrivate(!isprivate)}>
                        <CheckLabel>비공개 처리</CheckLabel>
                        <CheckBox>
                            <CheckIcon visibility={isprivate ? "visible" : "hidden"}/>
                        </CheckBox>
                    </CheckSection>
                </TextSection>
                <ButtonSection>
                    <PillButton children="등록" onClick={() => console.log(tagState)}/>
                    <PillButton negative children="취소"/>
                </ButtonSection>
            </Body>
        </Container>
    );
}

export default WritePage;