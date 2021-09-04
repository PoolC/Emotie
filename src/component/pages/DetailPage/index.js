import React from "react";
import { useParams } from "react-router-dom";

import { Container, Profile, Post, ProfileButton, Wrapper, Info, Nickname, Date, Content, Icons} from "./style";
import Header from "../../common/Header";
import EmotionTag from '../../common/EmotionTag';
import IconButton from '../../common/IconButton';
import { AiOutlineShareAlt} from "react-icons/ai";

function DetailPage(props) {
    const { id, postId } = useParams();
    return (
        <Container>
            <Header></Header>
            <Profile>
                <ProfileButton children="프로필 가기>>"></ProfileButton>
            </Profile>
            <Wrapper>
                <Post>
                <Info>
                    <EmotionTag emotion={props.emotion}/>
                    <Nickname>{id}</Nickname>
                    <Date>2021.07.20</Date>
                </Info>
                <Content>그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다. 그 자식한테 화가 나는 건지 나 자신한테 화가 나는건지 잘 모르겠다. 내가 뭘 잘못 했다고 나한테 이런 일이 일어나는 건지 모르겠다. 집에 가고 싶다.</Content>
                <Icons>
                    <IconButton icon={AiOutlineShareAlt} size="1.2rem" color="#7E7E7E" onClick={onShare}/>
                </Icons>
                </Post>
            </Wrapper>
        </Container>
    );
    function onShare(event) {
        event.stopPropagation();
        console.log("share");
    }

}

export default DetailPage;