import React, { useState } from "react";

import * as api from "../../../../utils/api";

import { Container, Group, Element } from "../component";

function ChangePasswordFragment(props) {
    // 인터페이스
    const [password, setPassword] = useState({ old: "", new: "", check: "" });
    const [passwordMessage, setPasswordMessage] = useState('');

    // 클릭 이벤트
    const changePassword = () => {
        // 선행 조건 : 새 비밀번호와 새 비밀번호 확인 일치
        if (password.new !== password.check) return props.showErrorAlert('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');

        api.changePassword(password.old, password.new, password.check)
        .then(response => {
            setPassword({ old: "", new: "", check: "" });
            props.showSuccessAlert();
        })
        .catch(error => {
            if (error.response && error.response.status === 400) props.showErrorAlert('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');
            else if (error.response && error.response.status === 403) props.showErrorAlert('현재 비밀번호가 일치하지 않습니다.');
            else props.showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };

    return (
        <Container.Frame>
            <Element.Title>비밀번호 변경</Element.Title>
            <Group.PasswordCheck password={password} setPassword={setPassword}/>
            <Group.NewPassword password={password} setPassword={setPassword} passwordMessage={passwordMessage} setPasswordMessage={setPasswordMessage}/>
            <Element.Button onClick={changePassword}>비밀번호 변경</Element.Button>
        </Container.Frame>
    );
}

export default ChangePasswordFragment;