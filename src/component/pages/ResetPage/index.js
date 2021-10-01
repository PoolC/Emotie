import React, { useState } from "react";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import Alert from "../../common/modal/Alert"
import {
    Container, Title, Text, InputGroup, InputAlert, FlexBox
} from "./style";

function ResetPage(props) {
    // const auth=()=>{
    //     server
    //         .post('/auth/login', {
    //             "email": "anfro2520@gmail.com",
    //             "password": "password",
    //         })
    //         .then(response => {
    //             props.history.push('/profile');
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             if (error.response) {
    //                 // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
    //                 if (error.response && error.response.status === 401) { 
    //                     setAlertTitle(error.response.status);       
    //                     setAlertMsg('비밀번호가 틀렸습니다.');
    //                     setOpen(true);
    //                 }else if(error.response && error.response.status === 404){
    //                     setAlertTitle(error.response.status);
    //                     setAlertMsg('가입되지 않은 이메일입니다.');
    //                     setOpen(true);
    //                 }else{
    //                     setAlertTitle(error.response.status);
    //                     setAlertMsg('알 수 없는 에러가 발생했습니다.');
    //                     setOpen(true);
    //                 }
    //             }
    //             else if (error.request) {
    //                 // 요청이 이루어 졌으나 응답을 받지 못함
    //                 setAlertTitle('에러');
    //                 setAlertMsg('서버에서 응답이 오지 않습니다.')
    //                 setOpen(true);
    //             }
    //             else {
    //                 setAlertTitle('에러');
    //                 setAlertMsg('로그인 요청에 문제가 발생했습니다')
    //                 setOpen(true);
    //             }
    //         });
    // }
    return (
        <Container>
            <Header/>
            <Title>비밀번호 변경</Title>
                <Text>변경할 비밀 번호를 입력하세요</Text>
                <InputGroup>
                    <PillInput width="200px" placeholder="새 비밀번호" type="password"></PillInput>
                    <InputAlert>8~20자 영문+숫자 조합이여야 합니다</InputAlert>
                </InputGroup>
                <InputGroup>
                    <PillInput width="200px" placeholder="비밀번호 재입력" type="password"></PillInput>
                    <InputAlert>비밀번호가 일치하지 않습니다</InputAlert>
                </InputGroup>
                <FlexBox>
                    <PillButton width="260px">확인</PillButton>
                </FlexBox>
        </Container>
    );
}

export default ResetPage;