import React, { useState } from "react";

import Header from "../../common/widget/Header";
import PillButton from "../../common/button/PillButton";
import PillInput from "../../common/input/PillInput";
import Alert from "../../common/modal/Alert";
import {
    Container, Title, Text, InputGroup, InputAlert, FlexBox
} from "./style";

import * as reg from "../../../utils/regex";
import * as api from "../../../utils/api";

function ResetPage(props) {
    const goLoginPage = () => props.history.push('/login');

    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');

    const [isSubmitOpen, setSubmitOpen] = useState(false);

    const url = window.location.href;
    const split=url.split("=");
    const token=split[2];
    const email=(split[1].split("&"))[0];

    const [inputs, setInputs] = useState({
        password: '',
        passwordCheck: '',
    });
    const { password, passwordCheck } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [alerts, setAlerts] = useState({
        passwordAlert: '',
        rePasswordAlert: '',
    });
    const { passwordAlert, rePasswordAlert } = alerts;

    const inputCheck = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case 'password':
                reg.checkPassword(value) ? setAlerts({ ...alerts, passwordAlert: '' }) : setAlerts({ ...alerts, passwordAlert: '8자 이상 20자 이하 영문+숫자 조합입니다' });
                break;
            case 'passwordCheck':
                (password === value) ? setAlerts({ ...alerts, rePasswordAlert: '' }) : setAlerts({ ...alerts, rePasswordAlert: '비밀번호가 일치하지 않습니다' });
                break;
            default:
                setAlertMsg('입력값 에러입니다');
        }
    }

    const detectInput = () => {
        if (password.length === 0) {
            setAlertMsg('이메일을 입력하세요');
            setOpen(true);
            return;
        }else if (passwordAlert !== '') {
            setAlertMsg(passwordAlert);
            setOpen(true);
            return;
        }
        if (passwordCheck.length === 0) {
            setAlertMsg('이메일을 입력하세요');
            setOpen(true);
            return;
        }else if (rePasswordAlert !== '') {
            setAlertMsg(rePasswordAlert);
            setOpen(true);
            return;
        }
        pwReset();
    }

    const pwReset = ()=>{
        api.pwResetCheck(token, email, password, passwordCheck)
        .then(() => {
            setSubmitOpen(true);
        })
        .catch(error => {
            if (error.response) {
                // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
                if(error.response.status==400){
                    setAlertTitle(error.response.status);
                    setAlertMsg('비밀번호 재입력이 일치하지 않습니다.');
                    setOpen(true);
                }else if (error.response.status === 404) {
                    setAlertTitle(error.response.status);
                    setAlertMsg('가입 대기 상태의 이메일이 아닙니다.');
                    setOpen(true);
                } else if ( error.response.status === 409) {
                    setAlertTitle(error.response.status);
                    setAlertMsg('잘못된 url입니다.');
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
                setAlertMsg('요청에 문제가 발생했습니다')
                setOpen(true);
            }
        });
    }
    const resetKeyPress = (e) => {
        console.log('press');
        if(e.key === 'Enter') {
            detectInput();
        }
    }
    return (
        <Container>
            <Header/>
            <Title>비밀번호 변경</Title>
                <Text>변경할 비밀 번호를 입력하세요</Text>
                <InputGroup>
                    <PillInput name="password" value={password} onChange={onChange} onBlur={inputCheck} width="200px" placeholder="새 비밀번호" type="password" onKeyPress={resetKeyPress}></PillInput>
                    <InputAlert>{passwordAlert}</InputAlert>
                </InputGroup>
                <InputGroup>
                    <PillInput name="passwordCheck" value={passwordCheck} onChange={onChange} onBlur={inputCheck} width="200px" placeholder="비밀번호 재입력" type="password" onKeyPress={resetKeyPress}></PillInput>
                    <InputAlert>{rePasswordAlert}</InputAlert>
                </InputGroup>
                <FlexBox>
                    <PillButton width="260px" onClick={detectInput} >확인</PillButton>
                </FlexBox>
                <Alert message={alertMsg} title={alertTitle} isOpen={isOpen} setOpen={setOpen}></Alert>
                <Alert title="비밀번호 변경" message="비밀번호가 변경되었습니다. 변경된 비밀번호로 로그인해주세요." isOpen={isSubmitOpen} setOpen={setSubmitOpen} firstButtonFunc={() => goLoginPage()}/>
        </Container>
    );
}

export default ResetPage;