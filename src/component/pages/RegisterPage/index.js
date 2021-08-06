import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";

import {
    Container, Title, Text, Logo, InputAlert, InputGroup, Gap, Switch, CertButton, FlexBox, GenderButton, BirthInput
} from "./style";

const inputprops = [{ value: "이메일 인증 번호", alert: "인증번호가 틀립니다" }, { value: "비밀번호", alert: "12자 이하 영문+숫자 조합이여야 합니다" }, { value: "비밀번호 재입력", alert: "비밀번호가 일치하지 않습니다" }, { value: "비밀번호", alert: "12자 이하 영문+숫자 조합이여야 합니다" }, { value: "별명", alert: "중복되는 별명입니다" }];
const gender = ['남성', '여성', '비공개'];
const birth = [{value: "년", min: "1900", max:"2020", width:"70px", placeholder:"출생년도"}, {value: "월", min: "1", max:"12", width:"30px", placeholder:"월"}, {value: "일", min: "1", max:"31", width:"30px", placeholder:"일"}];

function RegisterPage(props) {
    const cert = "인증번호 받기";
    const inputs = inputprops.map((props, index) =>
        <InputGroup>
            <PillInput key={index} width='200px' placeholder={props.value}></PillInput>
            <InputAlert>{props.alert}</InputAlert>
        </InputGroup>
    );
    const genderbutton = gender.map((gender, index) =>
        <GenderButton key={index}>{gender}</GenderButton>
    );
    const birthdate = birth.map((props, index) =>
        <FlexBox>
            <BirthInput type="number" key={index} width={props.width} min={props.min} max={props.max} placeholder={props.placeholder}></BirthInput>
            <div>&nbsp;&nbsp;{props.value}</div>
        </FlexBox>
    );
    return (
        <Container>
            <Header />
            <Logo src={logo}></Logo>
            <Title>Emotie 회원가입</Title>
            <Text>일기와 정보는 익명으로 보호되며, 별명을 설정해서 사용합니다. 당신이 원하지 않는다면 아무도 당신이 누군지 알 수 없습니다</Text>
            <Gap>
                <InputGroup>
                    <FlexBox>
                        <PillInput width='140px' placeholder='이메일'></PillInput><CertButton>{cert}</CertButton>
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
                {inputs}
                <InputGroup>
                    <FlexBox>
                        {genderbutton}
                    </FlexBox>
                    <InputAlert>성별을 입력해주세요</InputAlert>
                </InputGroup>
                <InputGroup>
                    <FlexBox>
                        {birthdate}
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
            </Gap>
            <PillButton width='260px'>다음</PillButton>
            <Switch>이미 계정이 있나요? 로그인하기</Switch>
        </Container>
    );
}

export default RegisterPage;