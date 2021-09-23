import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import server from "../../../utils/server";

import { Container, Group, Element } from "./component";

function SettingPage(props) {
    // 본인 정보
    const email = useSelector(store => store.user.email);
    const nickname = useSelector(store => store.user.nickname);
    const birth = useSelector(store => store.user.birth);
    const gender = useSelector(store => store.user.gender);

    // 수정할 수 있는 데이터
    const [tempNickname, setTempNickname] = useState("");
    const [tempBirth, setTempBirth] = useState("");
    const [tempGender, setTempGender] = useState("");
    useEffect(() => setTempNickname(nickname), [nickname]);
    useEffect(() => setTempBirth(birth), [birth]);
    useEffect(() => setTempGender(gender), [gender]);

    // 인터페이스
    const [category, setCategory] = useState(0);
    const [password, setPassword] = useState({old: "", new1: "", new2: ""});
    const [deletingReason, setDeletingReason] = useState(0);

    // 이벤트
    const handlePassword = {
        onOldChanged: (event) => setPassword({...password, old: event.target.value}),
        onNew1Changed: (event) => setPassword({...password, new1: event.target.value}),
        onNew2Changed: (event) => setPassword({...password, new2: event.target.value})
    };

    // 클릭 이벤트
    const changeCategory = (id) => {
        setTempNickname(nickname);
        setTempBirth(birth);
        setTempGender(gender);
        setCategory(id);
    }
    const changeInfo = () => {
        console.log(`개인정보 수정 => 닉네임 : ${nickname} / 생년월일 : ${birth.year}년 ${birth.month}월 ${birth.day}일 / 성별 : ${gender}`);
    };
    const changePassword = () => {
        console.log(`비밀번호 변경 => 기존 : ${password.old} / 새 : ${password.new1} / 확인 : ${password.new2}`);
    };
    const deleteAccount = () => {
        server
        .delete(`/members/${nickname}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <Container.Base>
            <Element.Header recommend feed/>
            <Container.Content>
                <Group.Category category={category} changeCategory={changeCategory}/>
                {category === 0 && // 개인정보 수정
                    <Container.Frame>
                        <Element.Title>기본 정보</Element.Title>
                        <Group.Nickname nickname={tempNickname} setTempNickname={setTempNickname}/>
                        <Group.Birth birth={tempBirth} setTempBirth={setTempBirth}/>
                        <Group.Gender gender={tempGender} setTempGender={setTempGender}/>
                        <Element.Button onClick={changeInfo}>수정 완료</Element.Button>
                    </Container.Frame>}
                {category === 1 && // 비밀번호 변경
                    <Container.Frame>
                        <Element.Title>비밀번호 변경</Element.Title>
                        <Group.PasswordCheck password={password} handlePassword={handlePassword}/>
                        <Group.NewPassword password={password} handlePassword={handlePassword}/>
                        <Element.Button onClick={changePassword}>비밀번호 변경</Element.Button>
                    </Container.Frame>}
                {category === 2 && // 계정 삭제
                    <Container.Frame>
                        <Element.Title>계정 삭제</Element.Title>
                        <Group.Warning nickname={nickname} email={email}/>
                        <Group.Reason deletingReason={deletingReason} setDeletingReason={setDeletingReason}/>
                        <Group.PasswordCheck password={password} handlePassword={handlePassword}/>
                        <Element.Button onClick={deleteAccount}>계정 삭제</Element.Button>
                    </Container.Frame>}
            </Container.Content>
        </Container.Base>
    );
}

export default SettingPage;