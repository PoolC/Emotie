import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as api from "../../../../utils/api";
import * as saga from "../../../../store/actions/_saga";

import { Container, Group, Element } from "../component";

function DeleteAccountFragment(props) {
    // 본인 정보
    const email = useSelector(store => store.user.email);
    const nickname = useSelector(store => store.user.nickname);

    // 수정할 수 있는 데이터
    const [deletingReason, setDeletingReason] = useState(0);

    // 인터페이스
    const dispatch = useDispatch();
    const [password, setPassword] = useState({old: "", new1: "", new2: ""});

    // 클릭 이벤트
    const deleteAccount = () => {
        // 계정 삭제
        api.deleteAccount(nickname)
        .then(response => {
            dispatch(saga.logout());
            props.showSuccessAlert();
        })
        .catch(error => props.showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.'));
    };

    return (
        <Container.Frame>
            <Element.Title>계정 삭제</Element.Title>
            <Group.Warning nickname={nickname} email={email}/>
            <Group.Reason deletingReason={deletingReason} setDeletingReason={setDeletingReason}/>
            <Group.PasswordCheck password={password} setPassword={setPassword}/>
            <Element.Button onClick={() => props.showCheckAlert(deleteAccount)}>계정 삭제</Element.Button>
        </Container.Frame>
    );
}

export default DeleteAccountFragment;