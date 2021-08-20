import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";


import { 
    Container, Title, Text, Logo, Switch, ButtonText
} from "./style";

function LoginPage(props) {
    const goFindPage = () => props.history.push('/find');
    const goRegisterPage = () => props.history.push('/register');
    const login = () => console.log('로그인');
    const detectInput=()=>{
        if(id.length===0){
            alert('이메일을 입력하세요');
            return;
        }if(password.length===0){
            alert('패스워드를 입력하세요');
            return;
        }
        login();
    }

    const [inputs, setInputs]=useState({
        id:'',
        password:'',
    });
    const {id, password}=inputs;
    const onChange=(e)=>{
        const{value,name}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    return (
        <Container>
            <Header/>
            <Logo src={logo}></Logo>
            <Title>Emotie 로그인</Title>
            <Text>Emotie에 오신 걸 환영합니다</Text>
            <PillInput name="id" value={id} onChange={onChange} width="200px" placeholder="이메일" type="text"></PillInput>
            <PillInput name="password" value={password} onChange={onChange} width="200px" placeholder="비밀번호" type="password"></PillInput>
            <PillButton width="260px" onClick={detectInput}>로그인</PillButton>
            <ButtonText onClick={goFindPage}>비밀번호를 잊으셨나요?</ButtonText>
            <Switch onClick={goRegisterPage}>계정이 없으신가요? 가입하기</Switch>
        </Container>
    );
}

export default LoginPage;