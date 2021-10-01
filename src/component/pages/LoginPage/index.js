import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as saga from "../../../store/actions/_saga";


import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import Alert from "../../common/modal/Alert"


import {
    Container, Title, Text, Logo, Switch, ButtonText
} from "./style";

function LoginPage(props) {
    const goFindPage = () => props.history.push('/find');
    const goRegisterPage = () => props.history.push('/register');

    const [inputs, setInputs] = useState({
        id: '',
        password: '',
    });
    const { id, password } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [isOpen, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('잘못된 접근입니다');
    const [alertTitle, setAlertTitle] = useState('경고');

    const dispatch = useDispatch();

    const isEmailValid = (email) => {
        var regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email !== '' && email !== 'undefined' && regExp.test(email));
    };

    const detectInput = () => {
        if (id.length === 0) {
            setAlertMsg('이메일을 입력하세요');
            setOpen(true);
            return;
        }
        if (!isEmailValid(id)) {
            setAlertMsg('이메일 양식이 아닙니다');
            setOpen(true);
            return;
        }
        if (password.length === 0) {
            setAlertMsg('패스워드를 입력하세요');
            setOpen(true);
            return;
        }
        login();
    }
    const login = () => {
        const payload = {
            email: id,
            password: password
        }
        dispatch(saga.login(payload))
            // .catch(error => {
            //     if (error.response) {
            //         // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
            //         if (error.response.status === 401) {
            //             setAlertTitle(error.response.status);
            //             setAlertMsg('비밀번호가 틀렸습니다.');
            //             setOpen(true);
            //         } else if (error.response.status === 404) {
            //             setAlertTitle(error.response.status);
            //             setAlertMsg('가입되지 않은 이메일입니다.');
            //             setOpen(true);
            //         } else {
            //             setAlertTitle(error.response.status);
            //             setAlertMsg('알 수 없는 에러가 발생했습니다.');
            //             setOpen(true);
            //         }
            //     }
            //     else if (error.request) {
            //         setAlertTitle('에러');
            //         setAlertMsg('서버에서 응답이 오지 않습니다.')
            //         setOpen(true);
            //     }
            //     else {
            //         setAlertTitle('에러');
            //         setAlertMsg('로그인 요청에 문제가 발생했습니다')
            //         setOpen(true);
            //     }
            // });
    }

    return (
        <Container>
            <Header />
            <Logo src={logo}></Logo>
            <Title>Emotie 로그인</Title>
            <Text>Emotie에 오신 걸 환영합니다</Text>
            <PillInput name="id" value={id} onChange={onChange} width="200px" placeholder="이메일" type="text"></PillInput>
            <PillInput name="password" value={password} onChange={onChange} width="200px" placeholder="비밀번호" type="password"></PillInput>
            <PillButton width="260px" onClick={detectInput}>로그인</PillButton>
            <ButtonText onClick={goFindPage}>비밀번호를 잊으셨나요?</ButtonText>
            <Switch onClick={goRegisterPage}>계정이 없으신가요? 가입하기</Switch>
            <Alert message={alertMsg} title={alertTitle} isOpen={isOpen} setOpen={setOpen}></Alert>
        </Container>
    );
}

export default LoginPage;