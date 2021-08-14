import React, { useState } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";

import {
    Container, Title, Text, Logo, InputAlert, InputGroup, Gap, CertButton, FlexBox, GenderButton, BirthInput, ButtonText, Border, Link, CheckSection, CheckLabel, CheckBox, CheckIcon
} from "./style";

function RegisterPage(props) {
    const inputprops = [{ value: "이메일 인증 번호", alert: "인증번호가 틀립니다" }, { value: "비밀번호 재입력", alert: "비밀번호가 일치하지 않습니다", type:"password" }, { value: "비밀번호", alert: "12자 이하 영문+숫자 조합이여야 합니다", type:"password"}, { value: "별명", alert: "중복되는 별명입니다" }];
    const gender = ['남성', '여성', '비공개'];
    const birth = [{value: "년", min: "1900", max:"2020", width:"70px", placeholder:"출생년도"}, {value: "월", min: "1", max:"12", width:"30px", placeholder:"월"}, {value: "일", min: "1", max:"31", width:"30px", placeholder:"일"}];
    const [isFirstCert,  setFirstCert] = useState(true);
    const [isChecked, setChecked ] = useState(false);
    const inputs = inputprops.map((props, index) =>
        <InputGroup>
            <PillInput key={index} width='200px' placeholder={props.value} type={props.type}></PillInput>
            <InputAlert>{props.alert}</InputAlert>
        </InputGroup>
    );
    const genderbutton = gender.map((gender, index) =>
        <GenderButton key={index} children={gender}></GenderButton>
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
                        <PillInput width='140px' placeholder='이메일'></PillInput><CertButton children={isFirstCert ? "인증번호 받기" : "재인증 하기"} onClick={() => setFirstCert(false)}></CertButton>
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
            <ButtonText>
                <CheckSection>
                        <CheckLabel>
                            <Link>개인정보처리방침 및 이용약관에 동의합니다</Link>
                        </CheckLabel>
                        <CheckBox onClick={() => setChecked(!isChecked)}>
                            <CheckIcon visibility={isChecked ? "visible" : "hidden"}/>
                        </CheckBox>
                    </CheckSection>
            </ButtonText>
            <PillButton width='260px' children='다음'></PillButton>
            <Border>
                <Link>
                    이미 계정이 있나요? 로그인하기
                </Link>
            </Border>
        </Container>
    );
}

export default RegisterPage;