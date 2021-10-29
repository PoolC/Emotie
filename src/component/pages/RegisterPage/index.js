import React, { useState } from "react";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import CheckBox from "../../common/CheckBox";
import SelectGroup from "../../common/SelectGroup";
import Alert from "../../common/modal/Alert";
import Term from "./component"

import * as api from "../../../utils/api";
import * as reg from "../../../utils/regex"

import {
    Container, Title, Text, Logo, InputAlert, InputGroup, Gap, FlexBox, ButtonText, Border, Link
} from "./style";

function RegisterPage(props) {

    const goLoginPage = () => props.history.push('/login');

    const [isChecked, setChecked] = useState(false);

    const [gender, setGender] = useState("MALE");

    const [year, setYear] = useState("2000");
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");
    const dateOfBirth = year + "-" + month + "-" + day;

    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');

    const [isSubmitOpen, setSubmitOpen] = useState(false);

    const [isTermOpen, setTermOpen] = useState(false);

    const [inputs, setInputs] = useState({
        email: '',
        emailCert: '',
        password: '',
        rePassword: '',
        nickname: ''
    });
    const { email, password, rePassword, nickname } = inputs;

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
    const inputCheck = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case 'email':
                reg.checkEmail(value) ? setAlerts({ ...alerts, emailAlert: '' }) : setAlerts({ ...alerts, emailAlert: '이메일 형식이 아닙니다' });
                break;
            case 'password':
                reg.checkPassword(value) ? setAlerts({ ...alerts, passwordAlert: '' }) : setAlerts({ ...alerts, passwordAlert: '8자 이상 20자 이하 영문+숫자 조합입니다' });
                break;
            case 'rePassword':
                (password === value) ? setAlerts({ ...alerts, rePasswordAlert: '' }) : setAlerts({ ...alerts, rePasswordAlert: '비밀번호가 일치하지 않습니다' });
                break;
            default:
                setAlertMsg('입력값 에러입니다');
        }
    }

    const detectInput = () => {
        if (email.length === 0) {
            setAlertMsg('이메일을 입력하세요');
            setOpen(true);
            return;
        } else if (emailAlert !== '') {
            setAlertMsg(emailAlert);
            setOpen(true);
            return;
        }
        if (password.length === 0) {
            setAlertMsg('비밀번호를 입력하세요');
            setOpen(true);
            return;
        } else if (passwordAlert !== '') {
            setAlertMsg(passwordAlert);
            setOpen(true);
            return;
        }

        if (rePassword.length === 0) {
            setAlertMsg('비밀번호를 재입력하세요');
            setOpen(true);
            return;
        } else if (rePasswordAlert !== '') {
            setAlertMsg(rePasswordAlert);
            setOpen(true);
            return;
        }
        if (nickname.length === 0) {
            setAlertMsg('별명을 입력하세요');
            setOpen(true);
            return;
        }
        registIn();
    }

    const registIn = () => {
        api.register(nickname, password, rePassword, gender, dateOfBirth, email)
            .then(() => {
                setSubmitOpen(true);
            })
            .catch(error => {
                if (error.response) {
                    // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
                    if (error.response && error.response.status === 401) {
                        setAlertTitle(error.response.status);
                        setAlertMsg('잘못된 형식입니다');
                        setOpen(true);
                    } else if (error.response && error.response.status === 409) {
                        setAlertTitle(error.response.status);
                        setAlertMsg('이미 가입된 이메일이거나 별명입니다');
                        setOpen(true);
                    } else {
                        setAlertTitle(error.response.status);
                        setAlertMsg('알 수 없는 에러가 발생했습니다.');
                        setOpen(true);
                    }
                }
                else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못함
                    setAlertTitle('에러');
                    setAlertMsg('서버에서 응답이 오지 않습니다.')
                    setOpen(true);
                }
                else {
                    setAlertTitle('에러');
                    setAlertMsg('가입 요청에 문제가 발생했습니다')
                    setOpen(true);
                }
            });
    }
    return (
        <Container>
            <Header />
            <Logo src={logo}></Logo>
            <Title>Emotie 회원가입</Title>
            <Text>일기와 정보는 익명으로 보호되며, 별명을 설정해서 사용합니다. 당신이 원한다면 아무도 당신이 누군지 알 수 없습니다</Text>
            <Gap>
                <InputGroup>
                    <FlexBox>
                        <PillInput name="email" value={email} onInput={inputChange} onBlur={inputCheck} width="200px" placeholder="이메일" type="text"></PillInput>
                    </FlexBox>
                    <InputAlert>{emailAlert}</InputAlert>
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
                        <PillInput name="nickname" value={nickname} onInput={inputChange} onBlur={inputCheck} width="200px" placeholder="별명" type="text"></PillInput>
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
                <div onClick={()=>setTermOpen(true)}>개인정보처리방침 및 이용약관에 동의합니다</div>
                <CheckBox checked={isChecked} onClick={() => setChecked(!isChecked)} />
            </ButtonText>
            <PillButton width="260px" children="다음" onClick={() => detectInput()}></PillButton>
            <Border>
                <Link onClick={goLoginPage}>
                    이미 계정이 있나요? 로그인하기
                </Link>
            </Border>
            <Alert isOpen={isOpen} message={alertMsg} title={alertTitle} setOpen={setOpen}></Alert>
            <Alert message={alertMsg} title={alertTitle} isOpen={isOpen} setOpen={setOpen}></Alert>
            <Alert title="인증 메일 발송" message="해당 이메일로 인증 메일이 발송되었습니다. 인증 후 계정이 활성화 됩니다" isOpen={isSubmitOpen} setOpen={setSubmitOpen} firstButtonFunc={() => goLoginPage()} />
            <Term isOpen={isTermOpen} setOpen={setTermOpen}></Term>
        </Container>
    );
}

export default RegisterPage;