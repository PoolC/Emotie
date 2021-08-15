import React, { useState } from "react";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import CheckBox from "../../common/CheckBox";
import SelectGroup from "../../common/SelectGroup";

import {
    Container, Title, Text, Logo, InputAlert, InputGroup, Gap, CertButton, FlexBox, GenderButton, BirthInput, ButtonText, Border, Link
} from "./style";

function RegisterPage(props) {
    const inputprops = [{ value: "이메일 인증 번호", alert: "인증번호가 틀립니다", type:"text"}, { value: "비밀번호 재입력", alert: "비밀번호가 일치하지 않습니다", type:"password" }, { value: "비밀번호", alert: "12자 이하 영문+숫자 조합이여야 합니다", type:"password"}, { value: "별명", alert: "중복되는 별명입니다", type:"text"}];
    const [isFirstCert,  setFirstCert] = useState(true);
    const [isChecked, setChecked ] = useState(false);
    const inputs = inputprops.map((props, index) =>
        <InputGroup>
            <PillInput key={index} width='200px' placeholder={props.value} type={props.type}></PillInput>
            <InputAlert>{props.alert}</InputAlert>
        </InputGroup>
    );
    

    const [gender, setGender] = useState(0);

    const [year, setYear] = useState("2000");
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");

    return (
        <Container>
            <Header />
            <Logo src={logo}></Logo>
            <Title>Emotie 회원가입</Title>
            <Text>일기와 정보는 익명으로 보호되며, 별명을 설정해서 사용합니다. 당신이 원한다면 아무도 당신이 누군지 알 수 없습니다</Text>
            <Gap>
                <InputGroup>
                    <FlexBox>
                        <PillInput width='140px' placeholder='이메일' type="text"></PillInput><CertButton children={isFirstCert ? "인증번호 받기" : "재인증 하기"} onClick={() => setFirstCert(false)}></CertButton>
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
                {inputs}
                <InputGroup>
                    <FlexBox>
                        <PillButton width="80px" onClick={() => setGender(0)} negative={gender === 0}>남성</PillButton>
                        <PillButton width="80px" onClick={() => setGender(1)} negative={gender === 1}>여성</PillButton>
                        <PillButton width="80px" onClick={() => setGender(2)} negative={gender === 2}>비공개</PillButton>
                    </FlexBox>
                    <InputAlert>성별을 입력해주세요</InputAlert>
                </InputGroup>
                <InputGroup>
                    <FlexBox>
                    <SelectGroup 
                                    state={year} 
                                    handleState={setYear}
                                    options={Array.from({length: 122}, (_, k) => k + 1900)}/>
                                <SelectGroup 
                                    state={month} 
                                    handleState={setMonth}
                                    options={Array.from({length: 12}, (_, k) => k + 1)}/>
                                <SelectGroup 
                                    state={day} 
                                    handleState={setDay}
                                    options={Array.from({length: 31}, (_, k) => k + 1)}/>
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
            </Gap>
            <ButtonText>
                <CheckBox label="개인정보처리방침 및 이용약관에 동의합니다" checked={isChecked} onClick={() => setChecked(!isChecked)}/>
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