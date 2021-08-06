import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";


import { 
    Container, Title, Text, Logo, Switch, ButtonFallback
} from "./style";

const inputprops = ["이메일", "비밀번호"];

function LoginPage(props) {
    const input = inputprops.map((value, index)=>
        <PillInput width="200px" key={index} placeholder={value}></PillInput>
    );
    return (
        <Container>
            <Header/>
            <Logo src={logo}></Logo>
            <Title>Emotie 로그인</Title>
            <Text>Emotie에 오신 걸 환영합니다</Text>
            {input}
            <PillButton width="260px">로그인</PillButton>
            <ButtonFallback>비밀번호를 잊으셨나요?</ButtonFallback>
            <Switch href="">계정이 없으신가요? 가입하기</Switch>
        </Container>
    );
}

export default LoginPage;