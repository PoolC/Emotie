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
    const [nicknameValidity, setNicknameValidity] = useState({ message: "", unique: false, formatted: true });

    // 클릭 이벤트
    const checkNicknameDuplicated = () => {
        // 선행 조건 : 올바른 별명
        if (!nicknameValidity.formatted) return props.showErrorAlert('중복 확인 전 별명의 형식이 올바른지 확인해주세요.');

        // 선행 조건 : 별명 변경
        if (nickname === tempNickname) return props.showErrorAlert('본인의 별명은 본인만이 가질 수 있어요!');

        api.checkNicknameDuplicated(tempNickname)
        .then(response => {
            if (response.data.checkNickname) setNicknameValidity({ message: '사용 가능한 별명입니다!', unique: true, formatted: true });
            else setNicknameValidity({ message: '이미 존재하는 별명입니다.', unique: false, formatted: true });
        })
        .catch(error => {
            if (error.response && error.response.status === 400) setNicknameValidity({ message: '올바르지 않은 형식의 별명입니다.', unique: false, formatted: true });
            else setNicknameValidity({ message: '서버와의 통신 중 오류가 발생하였습니다.', unique: false, formatted: true });
        });
    };
    const updateUserInfo = () => {
        // 선행 조건 : 올바른 별명
        if (nickname !== tempNickname && !nicknameValidity.formatted) return props.showErrorAlert('별명의 형식이 올바르지 않습니다.');

        // 선행 조건 : 중복 확인
        if (nickname !== tempNickname && !nicknameValidity.unique) return props.showErrorAlert('별명을 변경하려면 먼저 중복 확인을 진행해주세요.');

        const tempBirthRaw = `${numberToTwoString(tempBirth.year)}-${numberToTwoString(tempBirth.month)}-${numberToTwoString(tempBirth.day)}`;

        api.updateUserInfo(tempNickname, tempGender, tempBirthRaw)
        .then(response => {
            dispatch(saga.initUser());
            props.showSuccessAlert();
        })
        .catch(error => {
            if (error.response && error.response.status === 400) props.showErrorAlert('수정한 개인 정보에 올바르지 않은 형식이 포함되어 있습니다.');
            else if (error.response && error.response.status === 409) props.showErrorAlert('이미 존재하는 별명입니다.');
            else props.showErrorAlert('서버와의 통신 중 오류가 발생하였습니다.');
        });
    };

    return (
        <Container.Frame>
            <Element.Title>기본 정보</Element.Title>
            <Group.Email email={email}/>
            <Group.Nickname nickname={tempNickname} setTempNickname={setTempNickname} validity={nicknameValidity} setValidity={setNicknameValidity} checkNicknameDuplicated={checkNicknameDuplicated}/>
            <Group.Birth birth={tempBirth} setTempBirth={setTempBirth}/>
            <Group.Gender gender={tempGender} setTempGender={setTempGender}/>
            <Element.Button onClick={updateUserInfo}>수정 완료</Element.Button>
        </Container.Frame>
    );
}

export default UpdateInfoFragment;