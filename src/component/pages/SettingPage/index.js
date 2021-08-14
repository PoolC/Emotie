import React, { useEffect, useState } from "react";

import { 
    Container, ContentLayout, 
    CategoryLayout, Category,
    FrameLayout, Title, Group, Description, SemiGroup
} from "./style";
import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import RadioGroup from "../../common/RadioGroup";
import SelectGroup from "../../common/SelectGroup";

function SettingPage(props) {
    const [category, setCategory] = useState(0);

    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState(0);
    const [year, setYear] = useState("2000");
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");

    const [password, setPassword] = useState("");

    const [deletingReason, setDeletingReason] = useState(0);

    useEffect(() => {
        setCategory(0);

        // 임시 정보
        setNickname("공릉동 공룡");
        setGender(0);
    }, []);

    // 이벤트 감지
    const onNicknameChanged = (event) => setNickname(event.target.value);
    const onPasswordChanged = (event) => setPassword(event.target.value);

    // Fragment
    const settings = () => {
        switch(category) {
            case 0: // 개인정보 관리
                return (
                    <FrameLayout>
                        <Title>기본 정보</Title>
                        <Group>
                            <Description>별명</Description>
                            <PillInput width="300px" placeholder="별명" value={nickname} onChange={onNicknameChanged}/>
                        </Group>
                        <Group>
                            <Description>생년월일</Description>
                            <SemiGroup>
                                <SelectGroup 
                                    state={year} 
                                    handleState={setYear}
                                    options={Array.from({length: 122}, (_, k) => k + 1900)}/>
                                <SelectGroup 
                                    state={month} 
                                    handleState={setMonth}
                                    options={Array.from({length: 12}, (_, k) => k + 1)}/>
                                <SelectGroup 
                                    state={day} 
                                    handleState={setDay}
                                    options={Array.from({length: 31}, (_, k) => k + 1)}/>
                            </SemiGroup>
                        </Group>
                        <Group>
                            <Description>성별</Description>
                            <SemiGroup>
                                <PillButton width="80px" onClick={() => setGender(0)} negative={gender === 0}>남성</PillButton>
                                <PillButton width="80px" onClick={() => setGender(1)} negative={gender === 1}>여성</PillButton>
                                <PillButton width="80px" onClick={() => setGender(2)} negative={gender === 2}>비공개</PillButton>
                            </SemiGroup>
                        </Group>
                        <Group>
                            <PillButton width="150px">수정 완료</PillButton>
                        </Group>
                    </FrameLayout>
                );
            case 1: // 비밀번호 변경
                return (
                    <FrameLayout>
                        <Title>비밀번호 변경</Title>
                        <Group>
                            <Description>기존 비밀번호</Description>
                            <PillInput type="password" width="300px" placeholder="비밀번호" value={password} onChange={onPasswordChanged}/>
                        </Group>
                        <Group>
                            <Description>새 비밀번호</Description>
                            <PillInput type="password" width="300px" placeholder="비밀번호" value={password} onChange={onPasswordChanged}/>
                            <PillInput type="password" width="300px" placeholder="비밀번호 확인" value={password} onChange={onPasswordChanged}/>
                        </Group>
                        <Group>
                            <PillButton width="150px">비밀번호 변경</PillButton>
                        </Group>
                    </FrameLayout>
                );
            case 2: // 계정 삭제
                return (
                    <FrameLayout>
                        <Title>계정 삭제</Title>
                        <Group>
                            <Description>
                                <strong>{nickname} (hy0903@yonsei.ac.kr)</strong> 계정을 삭제합니다. 
                                삭제 즉시 계정 사용이 제한되며 마음글을 비롯한 모든 정보가 모두 비공개 처리됩니다. 
                                데이터는 한 달 간 보관 후 자동으로 삭제 됩니다.
                                한 달 내 재로그인시 계정이 활성화되며 계정 삭제 요청이 취소됩니다.
                            </Description>
                        </Group>
                        <Group>
                            <Description>아래의 사유로 계정을 삭제합니다.</Description>
                            <RadioGroup 
                                state={deletingReason} 
                                handleState={setDeletingReason}
                                options={[
                                    "더 이상 해당 서비스를 이용할 필요를 느끼지 않습니다.",
                                    "부적절한 서비스 이용자가 많습니다.",
                                    "서비스 이용 중 문제가 다수 발생하였습니다.",
                                    "새로운 계정을 생성합니다.",
                                    "기타"
                                ]}/>
                        </Group>
                        <Group>
                            <Description>비밀번호 확인</Description>
                            <PillInput type="password" width="300px" placeholder="비밀번호" value={password} onChange={onPasswordChanged}/>
                        </Group>
                        <Group>
                            <Description>정말로 삭제하시겠습니까?</Description>
                            <PillButton width="150px">계정 삭제</PillButton>
                        </Group>
                    </FrameLayout>
                );
            default:
                return null;
        }
    }

    return (
        <Container>
            <Header recommend feed/>
            <ContentLayout>
                <CategoryLayout>
                    <Category onClick={() => setCategory(0)} selected={category === 0}>개인정보 관리</Category>
                    <Category onClick={() => setCategory(1)} selected={category === 1}>비밀번호 변경</Category>
                    <Category onClick={() => setCategory(2)} selected={category === 2}>계정 삭제</Category>
                </CategoryLayout>
                {settings()}
            </ContentLayout>
        </Container>
    );
}

export default SettingPage;