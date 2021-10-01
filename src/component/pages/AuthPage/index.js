import React, { useState } from "react";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import Alert from "../../common/modal/Alert"
import { useParams } from "react-router-dom";
import {
    Container, Title, Text
} from "./style";

import * as api from "../../../utils/api"

function AuthPage(props) {
    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');
    const goLoginPage = () => {
        props.history.push('/login');
    }
    const email ='';
    const token ='';
    const tokenRequest = () => {

        api.activateAccount(email, token)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                if (error.response) {
                    // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
                    if (error.response && error.response.status === 403) {
                        setAlertTitle(error.response.status);
                        setAlertMsg('이미 인증된 메일입니다.');
                        setOpen(true);
                    } else if (error.response && error.response.status === 404) {
                        setAlertTitle(error.response.status);
                        setAlertMsg('가입 대기 상태의 이메일이 아닙니다.');
                        setOpen(true);
                    } else if (error.response && error.response.status === 400) {
                        setAlertTitle(error.response.status);
                        setAlertMsg('잘못된 url입니다. 인증에 실패했습니다.');
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
                    setAlertMsg('로그인 요청에 문제가 발생했습니다')
                    setOpen(true);
                }
            });

    }
    window.onload = () => tokenRequest();
    return (
        <Container>
            <Header />
            <Title>이메일 인증이 완료되었습니다</Title>
            <Text>가입이 완료되었습니다</Text>
            <PillButton>로그인 페이지로</PillButton>
        </Container>
    );
}

export default AuthPage;