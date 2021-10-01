import React, { useState } from "react";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import Alert from "../../common/modal/Alert"

import * as api from "../../../utils/api";


import {
    Container, Title, Text, InputGroup, InputAlert
} from "./style";

function FindPage(props) {

    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');

    const [email, setEmail] = useState('');
    const [alert, setAlert]=useState('');

    const isEmailValid = (email) => {
        var regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email !== '' && email !== 'undefined' && regExp.test(email));
    };

    const inputChange = (e)=>{
        const { value } = e.target;
        setEmail(value);
    }
    const inputCheck = (e) => {
        const { value } = e.target;
        if(!isEmailValid(value)){
            setAlert('이메일 양식이 아닙니다');
        }else{
            setAlert('');
        }
    }

    const detectInput = () => {
        if (email.length === 0) {
            setAlertMsg('이메일을 입력하세요');
            setOpen(true);
            return;
        }
        if(!isEmailValid(email)){
            setAlertMsg('이메일 양식이 아닙니다');
            setOpen(true);
            return;
        }
    }
    const resetEmailSend = () => {
        detectInput();
        api.pwResetEmail(email)
            .then(response => {
                setAlertTitle('인증 메일 전송');
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
    return (
        <Container>
            <Header />
            <Title>계정 찾기</Title>
            <Text>이메일을 입력하세요</Text>
            <InputGroup>
                <PillInput width="200px" placeholder="이메일" value={email} onInput={inputChange} onBlur={inputCheck}></PillInput>
                <InputAlert>{alert}</InputAlert>
            </InputGroup>
            <PillButton width="260px" onClick={()=>resetEmailSend()}>확인 메일 전송</PillButton>
            <Alert isOpen={isOpen} message={alertMsg} title={alertTitle} setOpen={setOpen}></Alert>
        </Container>
    );
}

export default FindPage;