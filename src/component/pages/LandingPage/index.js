import React from "react";

import { Container, Title, Text, Logo, Wrap } from "./style";
import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import logo from "../../../image/logo_text.svg";
import phone from "../../../image/phone_img.png";

function LandingPage(props) {
    return (
        <Container>  
                <Header />
                <Wrap>
                    <Logo src={phone}></Logo>
                    <Logo src={logo}></Logo>
                    <Title>매일 당신의 감정을 기록하세요</Title>
                    <Text>당신의 감정과 개성이 반영된 프로필로 사람들과 소통하세요</Text>
                </Wrap>
                <Wrap>
                    <PillButton negative children="지금 쓰러가기" width="200px"></PillButton>
                </Wrap>
        </Container>
    );
}

export default LandingPage;