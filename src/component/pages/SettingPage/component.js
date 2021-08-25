import { 
    BaseLayout, ContentLayout, 
    CategoryLayout, Category,
    FrameLayout, Title, Section, Description, SemiSection
} from "./style";
import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";
import RadioGroup from "../../common/RadioGroup";
import SelectGroup from "../../common/SelectGroup";

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
                <Category onClick={() => props.setCategory(0)} selected={props.category === 0}>개인정보 관리</Category>
                <Category onClick={() => props.setCategory(1)} selected={props.category === 1}>비밀번호 변경</Category>
                <Category onClick={() => props.setCategory(2)} selected={props.category === 2}>계정 삭제</Category>
            </CategoryLayout>
        );
    },
    // 개인정보 수정
    Birth: function(props) {
        return (
            <Section>
                <Description>생년월일</Description>
                <SemiSection>
                    <SelectGroup 
                        state={props.birth.year} 
                        handleState={props.handleBirth.setYear}
                        options={Array.from({length: 122}, (_, k) => k + 1900)}/>
                    <SelectGroup 
                        state={props.birth.month} 
                        handleState={props.handleBirth.setMonth}
                        options={Array.from({length: 12}, (_, k) => k + 1)}/>
                    <SelectGroup 
                        state={props.birth.day} 
                        handleState={props.handleBirth.setDay}
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
                    <PillButton width="80px" onClick={() => props.setGender(0)} negative={props.gender === 0}>남성</PillButton>
                    <PillButton width="80px" onClick={() => props.setGender(1)} negative={props.gender === 1}>여성</PillButton>
                    <PillButton width="80px" onClick={() => props.setGender(2)} negative={props.gender === 2}>비공개</PillButton>
                </SemiSection>
            </Section>
        );
    },
    // 비밀번호 변경
    PasswordCheck: function(props) {
        return (
            <Section>
                <Description>기존 비밀번호</Description>
                <PillInput type="password" width="300px" placeholder="비밀번호" value={props.password.old} onChange={props.handlePassword.onOldChanged}/>
            </Section>
        );
    },
    NewPassword: function(props) {
        return (
            <Section>
                <Description>새 비밀번호</Description>
                <PillInput type="password" width="300px" placeholder="비밀번호" value={props.password.new1} onChange={props.handlePassword.onNew1Changed}/>
                <PillInput type="password" width="300px" placeholder="비밀번호 확인" value={props.password.new2} onChange={props.handlePassword.onNew2Changed}/>
            </Section>
        );
    },
    // 계정 삭제
    Warning: function(props) {
        return (
            <Section>
                <Description>
                    <strong>{props.nickname} ({props.email})</strong> 계정을 삭제합니다. 
                    삭제 즉시 계정 사용이 제한되며 마음글을 비롯한 모든 정보가 모두 비공개 처리됩니다. 
                    데이터는 한 달 간 보관 후 자동으로 삭제 됩니다.
                    한 달 내 재로그인시 계정이 활성화되며 계정 삭제 요청이 취소됩니다.
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