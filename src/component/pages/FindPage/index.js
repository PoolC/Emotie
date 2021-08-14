import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";


import {
    Container, Title, Text, FlexBox, CertButton, Gap, InputGroup, InputAlert
} from "./style";

function FindPage(props) {
    const [step, setStep] = useState(0);
    const [isFirstCert,  setFirstCert] = useState(true);
    const goLoginPage = () => props.history.push('/login');
    let Page = null;
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
    } else if (step === 1) {
        Page =
        <>
        <Title>이메일 인증</Title>
        <Text>이메일을 인증하고 비밀번호를 변경하세요</Text>
        <FlexBox>
            <PillInput width='140px' placeholder='이메일'></PillInput>
            <CertButton children={isFirstCert ? "인증번호 받기" : "재인증 하기"} onClick={() => setFirstCert(false)}></CertButton>
        </FlexBox>
        <InputGroup>
            <PillInput width="200px" placeholder="이메일 인증번호"></PillInput>
        </InputGroup>
        <FlexBox>
            <PillButton negative width="120px" onClick={() => setStep(0)}>이전</PillButton>
            <PillButton width="120px" onClick={() => setStep(2)}>다음</PillButton>
        </FlexBox>
        </>;
    } else if (step === 2) {
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
            <PillButton negative width="120px" onClick={() => setStep(1)}>이전</PillButton>
            <PillButton width="120px" onClick={() => setStep(3)}>확인</PillButton>
        </FlexBox>
        </>;
    } else if (step === 3) {
        Page = 
        <>
        <Title>비밀번호 변경 완료</Title>
        <Text>비밀번호 변경이 완료되었습니다</Text>
        <PillButton width="220px" onClick={goLoginPage}>로그인 페이지로</PillButton>
        </>;
    } else {
        Page = <Text>잘못된 접근입니다.</Text>;
    }
    return (
        <Container>
            <Header/>
                {Page}
        </Container>
    );
}

export default FindPage;