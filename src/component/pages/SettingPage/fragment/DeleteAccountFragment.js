import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as api from "../../../../utils/api";
import * as saga from "../../../../store/actions/_saga";

import { Container, Group, Element } from "../component";

function DeleteAccountFragment(props) {
    // 본인 정보
    const email = useSelector(store => store.user.email);
    const nickname = useSelector(store => store.user.nickname);

    // 인터페이스
    const dispatch = useDispatch();
    const [deletingReason, setDeletingReason] = useState(0);
    const [password, setPassword] = useState({ old: "" });
    const matchDeletingReason = (index) => {
        switch (index) {
            case 0:
                return "더 이상 해당 서비스를 이용할 필요를 느끼지 않습니다.";
            case 1:
                return "부적절한 서비스 이용자가 많습니다.";
            case 2:
                return "서비스 이용 중 문제가 다수 발생하였습니다.";
            case 3:
                return "새로운 계정을 생성합니다.";
            default:
                return "기타";
        }
    };

    // 클릭 이벤트
    const askDelete = () => props.showCheckAlert(deleteAccount);
    const deleteAccount = () => {
        api.deleteAccount(password.old, matchDeletingReason(deletingReason))
        .then(response => {
            props.showSuccessAlert();
            dispatch(saga.logout());
        })
        .catch(error => {
            if (error.response && error.response.status === 403) props.showErrorAlert('기존 비밀번호가 일치하지 않습니다.');
            else if (error.response && error.response.status === 409) props.showErrorAlert('이미 탈퇴 처리된 계정입니다.');
            else props.showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.')
        });
    };

    return (
        <Container.Frame>
            <Element.Title>계정 삭제</Element.Title>
            <Group.Warning email={email} nickname={nickname}/>
            <Group.Reason deletingReason={deletingReason} setDeletingReason={setDeletingReason}/>
            <Group.PasswordCheck password={password} setPassword={setPassword}/>
            <Element.Button onClick={askDelete}>계정 삭제</Element.Button>
        </Container.Frame>
    );
}

export default DeleteAccountFragment;