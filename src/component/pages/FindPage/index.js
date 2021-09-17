import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import Alert from "../../common/modal/Alert"

import server from "../../../utils/server";


import {
    Container, Title, Text, FlexBox, CertButton, Gap, InputGroup, InputAlert
} from "./style";

function FindPage(props) {
    const [step, setStep] = useState('');
    const [isFirstCert, setFirstCert] = useState(true);
    const goLoginPage = () => props.history.push('/login');
    let Page = null;
    const url = window.location.search;
    const what = url.includes("?");

    const parameter = url.split("=");
    const token = parameter[1];
    console.log(token);

    if (what) {
        setStep(1);
    }else{
        setStep(0);
    }
    console.log(step);
    // if (check){
    //     token=setToken(url.split("=")[1]);
    //     console.log(token);
    // }

    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');

    const emailAuth = () => {
        console.log('로그인');
        server
            .post('/auth/login', {
                "email": "anfro2520@gmail.com",
                "password": "password",
            })
            .then(response => {
                setAlertTitle('');
                setAlertMsg('이메일 인증 메일이 전송되었습니다. 이메일에서 확인해주세요.')
                setOpen(true);
            })
            .catch(error => {
                if (error.response) {
                    // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
                    if (error.response && error.response.status === 404) {
                        setAlertTitle(error.response.status);
                        setAlertMsg('존재하지 않는 이메일입니다.');
                        setOpen(true);
                    };
                }
                else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못함
                    setAlertTitle('에러');
                    setAlertMsg('서버에서 응답이 오지 않습니다.')
                    setOpen(true);
                }
                else {
                    setAlertTitle('에러');
                    setAlertMsg('요청에 문제가 발생했습니다')
                    setOpen(true);
                }
            });
    }

    if (step === 0) {
        Page = <>
            <Title>계정 찾기</Title>
            <Text>이메일을 입력하세요</Text>
            <InputGroup>
                <PillInput width="200px" placeholder="이메일"></PillInput>
                <InputAlert>이메일 형식이 아닙니다</InputAlert>
            </InputGroup>

            <PillButton width="260px" onClick={() => setStep(1)}>검색</PillButton>
        </>;
        return;
    } else if (step === 1) {
        Page =
            <>
                <Title>비밀번호 변경</Title>
                <Text>변경할 비밀 번호를 입력하세요</Text>
                <InputGroup>
                    <PillInput width="200px" placeholder="새 비밀번호" type="password"></PillInput>
                    <InputAlert>12자 이하 영문+숫자 조합이여야 합니다</InputAlert>
                </InputGroup>
                <InputGroup>
                    <PillInput width="200px" placeholder="비밀번호 재입력" type="password"></PillInput>
                    <InputAlert>비밀번호가 일치하지 않습니다</InputAlert>
                </InputGroup>
                <FlexBox>
                    <PillButton negative width="120px" onClick={() => setStep(0)}>이전</PillButton>
                    <PillButton width="120px">확인</PillButton>
                </FlexBox>
            </>;
        return;

    } else {
        Page = <Text>잘못된 접근입니다.</Text>;
        return;
    }
    return (
        <Container>
            <Header />
            {Page}
            <Alert isOpen={isOpen} message={alertMsg} title={alertTitle} setOpen={setOpen}></Alert>
        </Container>
    );
}

export default FindPage;