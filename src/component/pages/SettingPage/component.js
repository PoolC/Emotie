import { checkPassword } from "@utils/regex";

import { 
    BaseLayout, ContentLayout, 
    CategoryLayout, Category,
    FrameLayout, Title, Section, SemiSection, Description, Label, Alert, PillInputWrapper
} from "./style";
import Header from "@common/widget/Header";
import PillButton from "@common/button/PillButton";
import PillInput from "@common/input/PillInput";
import RadioGroup from "@common/input/RadioGroup";
import SelectGroup from "@common/input/SelectGroup";

export const Container = {
    Base: function(props) {
        return <BaseLayout>{props.children}</BaseLayout>
    },
    Content: function(props) {
        return <ContentLayout>{props.children}</ContentLayout>
    },
    Frame: function(props) {
        return <FrameLayout>{props.children}</FrameLayout>
    },
};

export const Group = {
    Category: function(props) {
        return (
            <CategoryLayout>
                <Category onClick={() => props.changeCategory(0)} selected={props.category === 0}>개인정보 관리</Category>
                <Category onClick={() => props.changeCategory(1)} selected={props.category === 1}>비밀번호 변경</Category>
                <Category onClick={() => props.changeCategory(2)} selected={props.category === 2}>계정 삭제</Category>
            </CategoryLayout>
        );
    },
    // 개인정보 수정
    Email: function(props) {
        return (
            <Section>
                <Description>이메일</Description>
                <Label>{props.email}</Label>
            </Section>
        );
    },
    Nickname: function(props) {
        const onNicknameChanged = (event) => {
            const input = event.target.value;
            props.setTempNickname(input);

            if (input.trim() !== input) props.setValidity({ message: '별명은 공백으로 시작하거나 끝날 수 없습니다.', unique: false, formatted: false });
            else if (input.length < 1 || input.length > 20) props.setValidity({ message: '별명은 1자 이상 20자 이하이어야합니다.', unique: false, formatted: false });
            else props.setValidity({ message: '', unique: false, formatted: true });
        };

        return (
            <Section>
                <Description>별명</Description>
                <SemiSection>
                    <PillInputWrapper><PillInput width="100%" placeholder="별명" value={props.nickname} onChange={onNicknameChanged}/></PillInputWrapper>
                    <PillButton width="100px" onClick={props.checkNicknameDuplicated}>중복 확인</PillButton>
                </SemiSection>
                <Alert checked={props.validity.formatted && props.validity.unique}>{props.validity.message}</Alert>
            </Section>
        );
    },
    Birth: function(props) {
        const handleYear = (year) => props.setTempBirth({ ...props.birth, year: year });
        const handleMonth = (month) => props.setTempBirth({ ...props.birth, month: month });
        const handleDay = (day) => props.setTempBirth({ ...props.birth, day: day });

        return (
            <Section>
                <Description>생년월일</Description>
                <SemiSection>
                    <SelectGroup 
                        state={props.birth.year} 
                        handleState={handleYear}
                        options={Array.from({length: 122}, (_, k) => k + 1900)}/>
                    <SelectGroup 
                        state={props.birth.month} 
                        handleState={handleMonth}
                        options={Array.from({length: 12}, (_, k) => k + 1)}/>
                    <SelectGroup 
                        state={props.birth.day} 
                        handleState={handleDay}
                        options={Array.from({length: 31}, (_, k) => k + 1)}/>
                </SemiSection>
            </Section>
        );
    },
    Gender: function(props) {
        return (
            <Section>
                <Description>성별</Description>
                <SemiSection>
                    <PillButton width="80px" onClick={() => props.setTempGender('MALE')} negative={props.gender === 'MALE'}>남성</PillButton>
                    <PillButton width="80px" onClick={() => props.setTempGender('FEMALE')} negative={props.gender === 'FEMALE'}>여성</PillButton>
                    <PillButton width="80px" onClick={() => props.setTempGender('HIDDEN')} negative={props.gender === 'HIDDEN'}>비공개</PillButton>
                </SemiSection>
            </Section>
        );
    },
    // 비밀번호 변경
    PasswordCheck: function(props) {
        const onPasswordChanged = (event) => props.setPassword({ ...props.password, old: event.target.value });

        return (
            <Section>
                <Description>기존 비밀번호 확인</Description>
                <PillInputWrapper><PillInput type="password" width="100%" placeholder="비밀번호" value={props.password.old} onChange={onPasswordChanged}/></PillInputWrapper>
            </Section>
        );
    },
    NewPassword: function(props) {
        const onNewPasswordChanged = (event) => {
            props.setPassword({ ...props.password, new: event.target.value });

            // 확인
            const checkIfValid = checkPassword(event.target.value);
            const checkIfEqual = event.target.value === props.password.check;
            
            if (!checkIfValid) props.setPasswordMessage('비밀번호는 8자 이상 20자 이하의 영문+숫자(+특수문자)의 조합이어야 합니다.');
            else if (!checkIfEqual) props.setPasswordMessage('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            else props.setPasswordMessage('');
        }
        const onPasswordCheckChanged = (event) => {
            props.setPassword({ ...props.password, check: event.target.value });

            // 확인
            const checkIfValid = checkPassword(event.target.value);
            const checkIfEqual = event.target.value === props.password.new;
            
            if (!checkIfEqual) props.setPasswordMessage('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            else if (!checkIfValid) props.setPasswordMessage('비밀번호는 8자 이상 20자 이하의 영문+숫자(+특수문자)의 조합이어야 합니다.');
            else props.setPasswordMessage('');
        }

        return (
            <Section>
                <Description>새 비밀번호</Description>
                <PillInputWrapper><PillInput type="password" width="100%" placeholder="새 비밀번호" value={props.password.new} onChange={onNewPasswordChanged}/></PillInputWrapper>
                <PillInputWrapper><PillInput type="password" width="100%" placeholder="새 비밀번호 확인" value={props.password.check} onChange={onPasswordCheckChanged}/></PillInputWrapper>
                <Alert checked={false}>{props.passwordMessage}</Alert>
            </Section>
        );
    },
    // 계정 삭제
    Warning: function(props) {
        return (
            <Section>
                <Description>
                    <strong>{props.nickname} ({props.email})</strong> 계정을 삭제합니다. 
                    삭제 즉시 계정 사용이 제한되며 마음글을 비롯한 모든 정보가 모두 삭제 처리됩니다. 
                </Description>
            </Section>
        );
    },
    Reason: function(props) {
        return (
            <Section>
                <Description>아래의 사유로 계정을 삭제합니다.</Description>
                <RadioGroup 
                    state={props.deletingReason} 
                    handleState={props.setDeletingReason}
                    options={[
                        "더 이상 해당 서비스를 이용할 필요를 느끼지 않습니다.",
                        "부적절한 서비스 이용자가 많습니다.",
                        "서비스 이용 중 문제가 다수 발생하였습니다.",
                        "새로운 계정을 생성합니다.",
                        "기타"
                    ]}/>
            </Section>
        );
    },
};

export const Element = {
    Header: function() {
        return <Header recommend feed/>
    },
    Title: function(props) {
        return <Title>{props.children}</Title>
    },
    Button: function(props) {
        return <PillButton width="150px" onClick={props.onClick}>{props.children}</PillButton>
    },
};