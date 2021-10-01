import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as api from "../../../utils/api";
import { numberToTwoString } from "../../../utils/converter"

import * as saga from "../../../store/actions/_saga"

import { Container, Group, Element } from "./component";
import Alert from "../../common/modal/Alert";

function SettingPage(props) {
    const dispatch = useDispatch();

    // 본인 정보
    const email = useSelector(store => store.user.email);
    const nickname = useSelector(store => store.user.nickname);
    const birth = useSelector(store => store.user.birth);
    const gender = useSelector(store => store.user.gender);

    // 수정할 수 있는 데이터
    const [tempNickname, setTempNickname] = useState("");
    const [tempBirth, setTempBirth] = useState(birth);
    const [tempGender, setTempGender] = useState("");
    const [password, setPassword] = useState({old: "", new1: "", new2: ""});
    const [deletingReason, setDeletingReason] = useState(0);
    useEffect(() => setTempNickname(nickname), [nickname]);
    useEffect(() => setTempBirth(birth), [birth]);
    useEffect(() => setTempGender(gender), [gender]);

    // 인터페이스
    const [category, setCategory] = useState(0);
    const [isSuccessAlertOpen, setSuccessAlertOpen] = useState(false);
    const [isCheckAlertOpen, setCheckAlertOpen] = useState(false);
    const [isErrorAlertOpen, setErrorAlertOpen] = useState(false);
    const [duplicateMessage, setDuplicateMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // 클릭 이벤트
    const changeCategory = (id) => {
        // 초기화
        setTempNickname(nickname);
        setTempBirth(birth);
        setTempGender(gender);
        setDuplicateMessage('');
        setPassword({old: "", new1: "", new2: ""});

        // 카테고리 변경
        setCategory(id);
    };
    const checkNicknameDuplicated = () => {
        api.checkNicknameDuplicated(tempNickname)
        .then(response => {
            if (response.data.checkNickname) setDuplicateMessage('사용 가능한 별명입니다!');
            else setDuplicateMessage('이미 존재하는 별명입니다.');
        })
        .catch(error => {
            if (error.response && error.response.status === 400) return setDuplicateMessage('올바르지 않은 형식의 별명입니다.');
            setDuplicateMessage('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };
    const editUserInfo = () => {
        const birthRaw = `${numberToTwoString(tempBirth.year)}-${numberToTwoString(tempBirth.month)}-${numberToTwoString(tempBirth.day)}`;

        api.editUserInfo(tempNickname, tempGender, birthRaw)
        .then(response => {
            dispatch(saga.initUser());
            showSuccessAlert();
        })
        .catch(error => {
            if (error.response && error.response.status === 400) return showErrorAlert('올바르지 않은 형식의 개인 정보가 포함되어 있습니다.');
            else if (error.response && error.response.status === 409) return showErrorAlert('이미 존재하는 별명입니다.');
            showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };
    const changePassword = () => {
        // 비밀번호 확인
        api.checkPassword(password.old)
        .then(response => {
            // 비밀번호 변경
            if (!response.data.checkPassword) return showErrorAlert('기존 비밀번호가 일치하지 않습니다.');
            api.changePassword(password.new1, password.new2)
            .then(response => {
                setPassword({old: "", new1: "", new2: ""});
                showSuccessAlert();
            })
            .catch(error => {
                if (error.response && error.response.status === 400) return showErrorAlert('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
                showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
            });
        })
        .catch(error => {
            if (error.response && error.response.status === 400) return showErrorAlert('기존 비밀번호가 일치하지 않습니다.');
            showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };
    const deleteAccount = () => {
        // 비밀번호 확인
        api.checkPassword(password.old)
        .then(response => {
            if (!response.data.checkPassword) return showErrorAlert('기존 비밀번호가 일치하지 않습니다.');
            // 계정 삭제
            api.deleteAccount(nickname)
            .then(response => {
                // TODO
                showSuccessAlert();
            })
            .catch(error => showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.'));
        })
        .catch(error => {
            if (error.response && error.response.status === 400) return showErrorAlert('기존 비밀번호가 일치하지 않습니다.');
            showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };

    // 알림
    const showSuccessAlert = () => setSuccessAlertOpen(true);
    const showCheckAlert = () => setCheckAlertOpen(true);
    const showErrorAlert = (message) => {
        setErrorMessage(message);
        setErrorAlertOpen(true);
    };

    return (
        <Container.Base>
            <Element.Header recommend feed/>
            <Container.Content>
                <Group.Category category={category} changeCategory={changeCategory}/>
                {category === 0 && // 개인정보 수정
                    <Container.Frame>
                        <Element.Title>기본 정보</Element.Title>
                        <Group.Nickname nickname={tempNickname} setTempNickname={setTempNickname} checkNicknameDuplicated={checkNicknameDuplicated} duplicateMessage={duplicateMessage}/>
                        <Group.Birth birth={tempBirth} setTempBirth={setTempBirth}/>
                        <Group.Gender gender={tempGender} setTempGender={setTempGender}/>
                        <Element.Button onClick={editUserInfo}>수정 완료</Element.Button>
                    </Container.Frame>}
                {category === 1 && // 비밀번호 변경
                    <Container.Frame>
                        <Element.Title>비밀번호 변경</Element.Title>
                        <Group.PasswordCheck password={password} setPassword={setPassword}/>
                        <Group.NewPassword password={password} setPassword={setPassword} passwordMessage={passwordMessage} setPasswordMessage={setPasswordMessage}/>
                        <Element.Button onClick={changePassword}>비밀번호 변경</Element.Button>
                    </Container.Frame>}
                {category === 2 && // 계정 삭제
                    <Container.Frame>
                        <Element.Title>계정 삭제</Element.Title>
                        <Group.Warning nickname={nickname} email={email}/>
                        <Group.Reason deletingReason={deletingReason} setDeletingReason={setDeletingReason}/>
                        <Group.PasswordCheck password={password} setPassword={setPassword}/>
                        <Element.Button onClick={showCheckAlert}>계정 삭제</Element.Button>
                    </Container.Frame>}
            </Container.Content>
            {/* 모달 */}
            <Alert
                message="성공적으로 처리되었습니다."
                isOpen={isSuccessAlertOpen}
                setOpen={setSuccessAlertOpen}/>
            <Alert
                title="계정 삭제"
                message="정말로 삭제하시겠습니까?"
                firstButton="확인"
                secondButton="취소"
                firstButtonFunc={deleteAccount}
                isOpen={isCheckAlertOpen}
                setOpen={setCheckAlertOpen}/>
            <Alert
                title="오류"
                message={errorMessage}
                isOpen={isErrorAlertOpen}
                setOpen={setErrorAlertOpen}/>
        </Container.Base>
    );
}

export default SettingPage;