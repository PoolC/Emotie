import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as saga from "../../../store/actions/_saga";
import * as auth from "../../../store/actions/auth";

import Header from "../../common/Header";
import logo from "../../../image/logo_img.svg";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import Alert from "../../common/modal/Alert"

import * as reg from "../../../utils/regex"

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
    const authStatus = useSelector(store => store.auth.status);
    
    useEffect(() => loginStateDetect(authStatus), [authStatus]);

    const login = () => {
        const payload = {
            email: id,
            password: password
        }
        dispatch(saga.login(payload));
    }

    const loginStateDetect=(authStatus)=>{
        switch (authStatus) {
            case 'FAILED':
                setAlertTitle('로그인 실패');
                setAlertMsg('로그인에 실패했습니다');
                setOpen(true);
                break;
            case 'EXPIRED':
                setAlertTitle('로그인 만료');
                setAlertMsg('로그인이 만료되었습니다');
                setOpen(true);
                break;
            default:
                break;
        }
    }

    const detectInput = () => {
        if (id.length === 0) {
            setAlertMsg('이메일을 입력하세요');
            setOpen(true);
            return;
        }
        if (!reg.checkEmail(id)) {
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

    const handleKeyPress = (e) => {
        console.log('press');
        if(e.key === 'Enter') {
            detectInput();
        }
    }

    return (
        <Container>
            <Header />
            <Logo src={logo}></Logo>
            <Title>Emotie 로그인</Title>
            <Text>Emotie에 오신 걸 환영합니다</Text>
            <PillInput name="id" value={id} onChange={onChange} width="200px" placeholder="이메일" type="text"></PillInput>
            <PillInput name="password" value={password} onChange={onChange} width="200px" placeholder="비밀번호" type="password" onKeyPress={handleKeyPress}></PillInput>
            <PillButton width="260px" onClick={detectInput}>로그인</PillButton>
            <ButtonText onClick={goFindPage}>비밀번호를 잊으셨나요?</ButtonText>
            <Switch onClick={goRegisterPage}>계정이 없으신가요? 가입하기</Switch>
            <Alert message={alertMsg} title={alertTitle} isOpen={isOpen} setOpen={setOpen} firstButtonFunc={() => dispatch(auth.updateStatus('UNAUTHORIZED'))}></Alert>
        </Container>
    );
}

export default LoginPage;