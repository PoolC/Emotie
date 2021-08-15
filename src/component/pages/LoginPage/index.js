import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";


import { 
    Container, Title, Text, Logo, Switch, ButtonText
} from "./style";

const inputprops = ["이메일", "비밀번호"];

function LoginPage(props) {
    return (
        <Container>
            <Header/>
            <Logo src={logo}></Logo>
            <Title>Emotie 로그인</Title>
            <Text>Emotie에 오신 걸 환영합니다</Text>
            <PillInput width="200px" placeholder="이메일" type="text"></PillInput>
            <PillInput width="200px" placeholder="비밀번호" type="password"></PillInput>
            <PillButton width="260px">로그인</PillButton>
            <ButtonText>비밀번호를 잊으셨나요?</ButtonText>
            <Switch href="">계정이 없으신가요? 가입하기</Switch>
        </Container>
    );
}

export default LoginPage;