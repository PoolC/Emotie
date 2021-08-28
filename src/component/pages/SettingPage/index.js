import React, { useEffect, useState } from "react";

import server from "../../../utils/server";

import { Container, Group, Element } from "./component";

function SettingPage(props) {
    const [category, setCategory] = useState(0);

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState({year: "2000", month: "1", day: "1"});
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState({old: "", new1: "", new2: ""});
    const [deletingReason, setDeletingReason] = useState(0);

    useEffect(() => {
        setCategory(0);

        // 회원정보 설정
        setNickname('공릉동 공룡');
        setEmail('dinosaur@gmail.com');
        setGender('MALE');
    }, []);

    // 이벤트
    const onNicknameChanged = (event) => setNickname(event.target.value);
    const handleBirth = {
        setYear: (year) => setBirth({...birth, year: year}),
        setMonth: (month) => setBirth({...birth, month: month}),
        setDay: (day) => setBirth({...birth, day: day})
    };
    const handlePassword = {
        onOldChanged: (event) => setPassword({...password, old: event.target.value}),
        onNew1Changed: (event) => setPassword({...password, new1: event.target.value}),
        onNew2Changed: (event) => setPassword({...password, new2: event.target.value})
    };

    // 클릭 이벤트
    const changeCategory = (id) => {
        setNickname('공릉동 공룡');
        setPassword({old: "", new1: "", new2: ""});
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
                        <Group.Nickname nickname={nickname} onNicknameChanged={onNicknameChanged}/>
                        <Group.Birth birth={birth} handleBirth={handleBirth}/>
                        <Group.Gender gender={gender} setGender={setGender}/>
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