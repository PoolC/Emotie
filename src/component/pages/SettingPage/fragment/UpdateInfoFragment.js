import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as api from "../../../../utils/api";
import { numberToTwoString } from "../../../../utils/converter";
import * as saga from "../../../../store/actions/_saga";

import { Container, Group, Element } from "../component";

function UpdateInfoFragment(props) {
    // 본인 정보
    const email = useSelector(store => store.user.email);
    const nickname = useSelector(store => store.user.nickname);
    const birth = useSelector(store => store.user.birth);
    const gender = useSelector(store => store.user.gender);

    // 수정할 수 있는 데이터
    const [tempNickname, setTempNickname] = useState("");
    const [tempBirth, setTempBirth] = useState(birth);
    const [tempGender, setTempGender] = useState("");
    useEffect(() => setTempNickname(nickname), [nickname]);
    useEffect(() => setTempBirth(birth), [birth]);
    useEffect(() => setTempGender(gender), [gender]);

    // 인터페이스
    const dispatch = useDispatch();
    const [duplicateMessage, setDuplicateMessage] = useState('');

    // 클릭 이벤트
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
    const updateUserInfo = () => {
        const birthRaw = `${numberToTwoString(tempBirth.year)}-${numberToTwoString(tempBirth.month)}-${numberToTwoString(tempBirth.day)}`;

        api.editUserInfo(tempNickname, tempGender, birthRaw)
        .then(response => {
            dispatch(saga.initUser());
            props.showSuccessAlert();
        })
        .catch(error => {
            if (error.response && error.response.status === 400) return props.showErrorAlert('올바르지 않은 형식의 개인 정보가 포함되어 있습니다.');
            else if (error.response && error.response.status === 409) return props.showErrorAlert('이미 존재하는 별명입니다.');
            props.showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };

    return (
        <Container.Frame>
            <Element.Title>기본 정보</Element.Title>
            <Group.Nickname nickname={tempNickname} setTempNickname={setTempNickname} checkNicknameDuplicated={checkNicknameDuplicated} duplicateMessage={duplicateMessage}/>
            <Group.Birth birth={tempBirth} setTempBirth={setTempBirth}/>
            <Group.Gender gender={tempGender} setTempGender={setTempGender}/>
            <Element.Button onClick={updateUserInfo}>수정 완료</Element.Button>
        </Container.Frame>
    );
}

export default UpdateInfoFragment;