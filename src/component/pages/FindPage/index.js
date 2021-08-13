import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";


import {
    Container, Title, Text, FlexBox, CertButton, Gap
} from "./style";
function FindPage(props) {
    const [step, setStep] = useState(0);
    const cert = "인증번호 받기";
    let Button = null;
    if (step === 0) {
        Button = <>
        <Title>계정 찾기</Title>
        <Text>이메일을 입력하세요</Text>
        <PillInput width="200px" placeholder="이메일"></PillInput>
        <PillButton width="260px" onClick={() => setStep(1)}>검색</PillButton>
        </>;
    } else if (step === 1) {
        Button =
        <>
        <Title>이메일 인증</Title>
        <Text>이메일을 인증하고 비밀번호를 변경하세요</Text>
        <FlexBox>
            <PillInput width='140px' placeholder='이메일'></PillInput><CertButton children={cert}></CertButton>
        </FlexBox>
        <PillInput width="200px" placeholder="이메일 인증번호"></PillInput>
        <FlexBox>
            <PillButton negative width="120px" onClick={() => setStep(0)}>이전</PillButton>
            <PillButton width="120px" onClick={() => setStep(2)}>다음</PillButton>
        </FlexBox>
        </>;
    } else if (step === 2) {
        Button =
        <>
        <Title>비밀번호 변경</Title>
        <Text>변경할 비밀 번호를 입력하세요</Text>
        <PillInput width="200px" placeholder="새 비밀번호"></PillInput>
        <PillInput width="200px" placeholder="비밀번호 재입력"></PillInput>
        <FlexBox>
            <PillButton negative width="120px" onClick={() => setStep(1)}>이전</PillButton>
            <PillButton width="120px" onClick={() => setStep(3)}>확인</PillButton>
        </FlexBox>
        </>;
    } else if (step === 3) {
        Button = 
        <>
        <Title>비밀번호 변경 완료</Title>
        <Text>비밀번호 변경이 완료되었습니다</Text>;
        <PillButton width="260px">로그인 페이지로</PillButton>
        </>;
    } else {
        Button = <Text>잘못된 접근입니다.</Text>;
    }
    return (
        <Container>
            <Header/>
                {Button}
        </Container>
    );
}

export default FindPage;