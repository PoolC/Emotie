import React, { useEffect, useState } from "react";

import { Container, Group, Element } from "./component";

function SettingPage(props) {
    const [category, setCategory] = useState(0);

    const [birth, setBirth] = useState({year: "2000", month: "1", day: "1"});
    const [gender, setGender] = useState(0);
    const [password, setPassword] = useState({old: "", new1: "", new2: ""});
    const [deletingReason, setDeletingReason] = useState(0);

    useEffect(() => {
        setCategory(0);
    }, []);

    // 클릭 이벤트
    const changeInfo = () => {
        console.log('개인정보 수정');
    };
    const changePassword = () => {
        console.log('비밀번호 변경');
    };
    const deleteAccount = () => {
        console.log('계정 삭제');
    };

    // 이벤트
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

    return (
        <Container.Base>
            <Element.Header recommend feed/>
            <Container.Content>
                <Group.Category category={category} setCategory={setCategory}/>
                {category === 0 && // 개인정보 수정
                    <Container.Frame>
                        <Element.Title>기본 정보</Element.Title>
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
                        <Group.Warning nickname="공릉동 공룡" email="dinosaur@gmail.com"/>
                        <Group.Reason deletingReason={deletingReason} setDeletingReason={setDeletingReason}/>
                        <Group.PasswordCheck password={password} handlePassword={handlePassword}/>
                        <Element.Button onClick={deleteAccount}>계정 삭제</Element.Button>
                    </Container.Frame>}
            </Container.Content>
        </Container.Base>
    );
}

export default SettingPage;