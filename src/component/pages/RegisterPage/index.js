import React, { useState } from "react";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import CheckBox from "../../common/CheckBox";
import SelectGroup from "../../common/SelectGroup";

import Alert from "../../../component/common/modal/Alert";

import server from "../../../utils/server";


import {
    Container, Title, Text, Logo, InputAlert, InputGroup, Gap, CertButton, FlexBox, ButtonText, Border, Link
} from "./style";

function RegisterPage(props) {
    const [isFirstCert, setFirstCert] = useState(true);
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [emailChecked, setEmailChecked] = useState(false);
    const [nicknameChecked, setNicknameChecked] = useState(false);

    const [gender, setGender] = useState("MALE");

    const [year, setYear] = useState("2000");
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");

    const dateOfBirth = year + "-" + month + "-" + day;

    //alert처리한 거 바꾸는 중
    const detectInput = () => {
        if (email.length === 0) {
            alert('이메일을 입력하세요');
            return;
        } else if (emailAlert != '') {
            alert(emailAlert);
            return;
        }
        if (password.length === 0) {
            alert('비밀번호를 입력하세요');
            return;
        } else if (passwordAlert != '') {
            alert(passwordAlert);
            return;
        }
        if (rePassword.length === 0) {
            console.log('5');
            alert('비밀번호를 재입력하세요');
            return;
        } else if (rePasswordAlert != '') {
            alert(rePasswordAlert);
            return;
        }

        if (nickname.length === 0) {
            alert('별명을 입력하세요');
            return;
        }
        if (nicknameChecked === false) {
            console.log('8');
            alert('별명 중복 확인을 해주세요');
            return;
        }

        if(privacyChecked === false){
            alert('개인 정보 및 이용약관에 동의하세요');
            return;
        }
        console.log('아나');
        registIn();
    }

    const [inputs, setInputs] = useState({
        email: '',
        emailCert: '',
        password: '',
        rePassword: '',
        nickname: ''
    });
    const { email, emailCert, password, rePassword, nickname } = inputs;

    const [alerts, setAlerts] = useState({
        emailAlert: '',
        passwordAlert: '',
        rePasswordAlert: '',
    });
    const { emailAlert, passwordAlert, rePasswordAlert } = alerts;

    const inputChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const isEmailValid = (email) => {
        var regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email != '' && email != 'undefined' && regExp.test(email));
    };
    //이 부분 변경하기
    const isPasswordValid = (password) => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
        return (password != '' && password != 'undefined' && regExp.test(password));
    };
    const inputCheck = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case 'email':
                isEmailValid(value) ? setAlerts({ ...alerts, emailAlert: '' }) : setAlerts({ ...alerts, emailAlert: '이메일 형식이 아닙니다' });
                break;
            case 'password':
                isPasswordValid(value) ? setAlerts({ ...alerts, passwordAlert: '' }) : setAlerts({ ...alerts, passwordAlert: '8자 이상 20자 이하 영문+숫자 조합입니다' });
                break;
            case 'rePassword':
                (password === value) ? setAlerts({ ...alerts, rePasswordAlert: '' }) : setAlerts({ ...alerts, rePasswordAlert: '비밀번호가 일치하지 않습니다' });
                break;
        }
    }

    const registIn = () => {
        console.log("가입");
        server
            .post('/members', {
                "nickname": nickname,
                "password": password,
                "passwordCheck": rePassword,
                "gender": gender,
                "dateOfBirth": dateOfBirth,
                "email": email,
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const emailAuth = () => {

    };

    const isNicknameUnique = () => {
        console.log("중복 확인");
        server
        .get('/members/nickname', {
            "nickname": nickname
        }, console.log("nick 감"))
        .then(response => {
            console.log(response);
            //200 400 처리 어떻게 되는 거지
            setNicknameChecked(true);
        })
        .catch(error => {
            console.log(error);
        });
    }
    const emailAuthSend = () => {
        server
        .post('/auth/authorization', {
        })
        .then(response => {
            console.log(response);
            setEmailChecked(true);
        })
        .catch(error => {
            console.log(error);
            setEmailChecked(false);
        });
    };

    return (
        <Container>
            <Header />
            <Logo src={logo}></Logo>
            <Title>Emotie 회원가입</Title>
            <Text>일기와 정보는 익명으로 보호되며, 별명을 설정해서 사용합니다. 당신이 원한다면 아무도 당신이 누군지 알 수 없습니다</Text>
            <Gap>
                <InputGroup>
                    <FlexBox>
                        <PillInput name="email" value={email} onInput={inputChange} onBlur={inputCheck} width="140px" placeholder="이메일" type="text"></PillInput><CertButton children={isFirstCert ? "인증번호 받기" : "재인증 하기"} onClick={() => { setFirstCert(false); setEmailChecked(false); emailAuthSend();}}></CertButton>
                    </FlexBox>
                    <InputAlert>{emailAlert}</InputAlert>
                </InputGroup>
                <InputGroup>
                    <FlexBox>
                        <PillInput width="140px" placeholder="이메일 인증번호" type="text"></PillInput><CertButton children={"확인"} onClick={() => emailAuth()}></CertButton>
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
                <InputGroup>
                    <PillInput name="password" value={password} onInput={inputChange} onBlur={inputCheck} width="200px" placeholder="비밀번호" type="password">
                    </PillInput>
                    <InputAlert>{passwordAlert}</InputAlert>
                </InputGroup>
                <InputGroup>
                    <PillInput name="rePassword" value={rePassword} onInput={inputChange} onBlur={inputCheck} width="200px" placeholder="비밀번호 재입력" type="password">
                    </PillInput>
                    <InputAlert>{rePasswordAlert}</InputAlert>
                </InputGroup>
                <InputGroup>
                    <FlexBox>
                        <PillInput name="nickname" value={nickname} onInput={inputChange} onBlur={inputCheck} width="140px" placeholder="별명" type="text" readOnly={nicknameChecked}></PillInput>
                        <CertButton children={"중복 확인"} onClick={() => isNicknameUnique()}></CertButton>
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
                <InputGroup>
                    <FlexBox>
                        <PillButton width="80px" onClick={() => setGender('MALE')} negative={gender === 0}>남성</PillButton>
                        <PillButton width="80px" onClick={() => setGender('FEMALE')} negative={gender === 1}>여성</PillButton>
                        <PillButton width="80px" onClick={() => setGender('HIDDEN')} negative={gender === 2}>비공개</PillButton>
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
                <InputGroup>
                    <FlexBox>

                        <SelectGroup
                            state={year}
                            handleState={setYear}
                            options={Array.from({ length: 122 }, (_, k) => k + 1900)} />
                        <SelectGroup
                            state={month}
                            handleState={setMonth}
                            options={Array.from({ length: 12 }, (_, k) => k + 1)} />
                        <SelectGroup
                            state={day}
                            handleState={setDay}
                            options={Array.from({ length: 31 }, (_, k) => k + 1)} />
                    </FlexBox>
                    <InputAlert></InputAlert>
                </InputGroup>
            </Gap>
            <ButtonText>
                <CheckBox label="개인정보처리방침 및 이용약관에 동의합니다" checked={privacyChecked} onClick={() => setPrivacyChecked(!privacyChecked)} />
            </ButtonText>
            <PillButton width="260px" children="다음" onClick={() => detectInput()}></PillButton>
            <Border>
                <Link>
                    이미 계정이 있나요? 로그인하기
                </Link>
            </Border>
        </Container>
    );
}

export default RegisterPage;