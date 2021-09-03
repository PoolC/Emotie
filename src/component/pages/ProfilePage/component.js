import { 
    BaseLayout,
    MotieLayout, ContentLayout, 
    ProfileLayout, InfoLayout, Nickname, DescriptionWrapper, Description, DescriptionCount, MenuLayout, StateLayout, State, CategoryLayout, Category, InputLayout, Input,
    PostList,
    Boundary
} from "./style";
import Header from "../../common/Header";
import MotieFrame from "../../common/MotieFrame";
import PillShadowButton from "../../common/PillShadowButton";
import PostCard from "../../common/PostCard";
import IconButton from "../../common/IconButton";
import { IoPencil } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return <BaseLayout emotion={props.emotion}>{props.children}</BaseLayout>
    },
    Motie: function(props) {
        return <MotieLayout>{props.children}</MotieLayout>
    },
    Content: function(props) {
        return <ContentLayout>{props.children}</ContentLayout>
    },
    Profile: function(props) {
        return <ProfileLayout backgroundColor={props.backgroundColor}>{props.children}</ProfileLayout>
    },
};

export const Group = {
    Info: function(props) {
        const DESCRIPTION_MAX_LENGTH = 100;
        return (
            <InfoLayout>
                <Nickname isEditMode={props.isEditMode}>{props.nickname}</Nickname>
                <DescriptionWrapper isEditMode={props.isEditMode}><Description value={props.description} maxLength={DESCRIPTION_MAX_LENGTH} onChange={props.onDescriptionChange} disabled={!props.isEditMode}/></DescriptionWrapper>
                <DescriptionCount isEditMode={props.isEditMode}>{props.description.length} / {DESCRIPTION_MAX_LENGTH}</DescriptionCount>
            </InfoLayout>
        );
    },
    State: function(props) {
        return (props.isMyProfile && 
            <StateLayout isEditMode={props.isEditMode}>
                <State>팔로워 12</State>
                <State>팔로잉 15</State>
            </StateLayout>
        );
    },
    Menu: function(props) {
        return (
            <MenuLayout>{props.isMyProfile 
                ? <>{props.isEditMode 
                    ? <>
                        <PillShadowButton width="100px" onClick={() => props.stopEditMode(false)} negative>취소</PillShadowButton>
                        <PillShadowButton width="100px" onClick={() => props.stopEditMode(true)}>완료</PillShadowButton>
                    </>
                    : <>
                        <PillShadowButton width="100px" onClick={props.write} negative>마음글 쓰기</PillShadowButton>
                        <PillShadowButton width="100px" onClick={props.startEditMode}>프로필 수정</PillShadowButton>
                    </>
                }</>
                : <PillShadowButton width="100px" onClick={props.follow}>팔로우</PillShadowButton>}
            </MenuLayout>
        );
    },
    Category: function(props) {
        return (
            <CategoryLayout isEditMode={props.isEditMode}>
                <Category onClick={() => props.setCategory(0)} selected={props.category === 0}>마음글</Category>
                <Category onClick={() => props.setCategory(1)} selected={props.category === 1}>방명록</Category>
            </CategoryLayout>
        );
    },
    GuestbookInput: function(props) {
        return (props.category === 1 && 
            <InputLayout isEditMode={props.isEditMode}>
                <Input width="100%" placeholder="방명록을 남기세요"/>
                <IconButton icon={IoPencil} color="white" size="1rem"/>
            </InputLayout>
        );
    },
    Post: function(props) {
        const options = {
            hideEmotion: props.category === 1,
            share: props.category === 0,
            blur: props.category === 0 && !props.isMyProfile,
            report: (props.category === 0 && !props.isMyProfile) || (props.category === 1 && props.isMyProfile),
            delete: props.isMyProfile
        };
        return (
            <PostList category={props.category} isEditMode={props.isEditMode}>
                {props.category === 0 
                ? props.postList.map((post, index) => <PostCard id={index} key={index} emotion={post.emotion} {...options}/>)
                : props.guestbookList.map((post, index) => <PostCard id={index} key={index} nickname={post.nickname} content={post.content} {...options}/>)}
            </PostList>
        );
    },
};

export const Element = {
    Header: function() {
        return <Header transparent recommend feed/>;
    },
    Motie: function(props) {
        return <div style={{width: "150px", height: "150px", backgroundColor: "white", borderRadius: "50%", boxShadow: "0 0 30px #ffffff80"}}/>
        // return <MotieFrame emotion={props.emotion}/>;
    },
    Boundary: function(props) {
        return <Boundary backgroundColor={props.backgroundColor} top={props.top} bottom={props.bottom}/>
    },
};