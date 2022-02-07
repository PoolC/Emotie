import React from "react";

import { Container, Title, Text, Logo, Wrap, ImagePart, TextPart, MainPart, CharacterImg, FeedImg, RecommendImg, Footer, FooterContent } from "./style";
import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import logo from "../../../image/logo_img.svg";
import character from "../../../image/LandingPageImg/character.png";
import feed from "../../../image/LandingPageImg/feed.png";
import recommend from "../../../image/LandingPageImg/recommend.png";

function LandingPage(props) {
    const goLoginPage = () => props.history.push('/login');
    return (
        <Container>
            <Header />
            <Wrap style={{ backgroundColor: '#1E1E1E' }}>
                <MainPart>
                    <Logo src={logo}></Logo>
                    <Title style={{ textAlign: 'center' }}>매일 당신의 감정을 기록하세요</Title>
                    <Text style={{ textAlign: 'center' }}>당신의 감정과 개성이 반영된 프로필로 사람들과 소통하세요</Text>
                    <PillButton negative children="지금 쓰러가기" width="200px" onClick={() => goLoginPage()}></PillButton>
                </MainPart>
            </Wrap>
            <Wrap style={{ backgroundColor: '#8381E8' }}>
                <ImagePart>
                    <CharacterImg src={character}></CharacterImg>
                </ImagePart>
                <TextPart>
                    <Title style={{ color: '#1E1E1E' }}>당신의 마음글을 반영한 프로필</Title>
                    <Text style={{ color: '#1E1E1E' }}>당신의 일기가 쌓여 당신의 감정을 반영한 캐릭터와 프로필을 생성합니다. 프로필을 기반으로 다양한 캐릭터를 커스터마이징 해보세요.</Text>
                </TextPart>
            </Wrap>
            <Wrap style={{ backgroundColor: '#333333' }}>
                <TextPart>
                    <Title>나와 감정을 나눌 수 있는 사람들을 만나보세요</Title>
                    <Text>당신과 비슷한 감정 구성을 가진 사람들이 피드에 추천됩니다.</Text>
                </TextPart>
                <ImagePart>
                    <RecommendImg src={recommend}></RecommendImg>
                </ImagePart>
            </Wrap>
            <Wrap style={{ backgroundColor: '#1E1E1E' }}>
                <ImagePart>
                    <FeedImg src={feed}></FeedImg>
                </ImagePart>
                <TextPart>
                    <Title>서로의 글을 구독하고 응원하세요</Title>
                    <Text>피드에서 다양한 사람들의 익명 일기를 읽고 프로필에 방명록을 남길 수 있습니다.</Text>
                </TextPart>
            </Wrap>
            <Footer>
                <FooterContent>
                기술 지원/고객 상담: emotie.team@gmail.com
                </FooterContent>
            </Footer>
        </Container>
    );
}

export default LandingPage;