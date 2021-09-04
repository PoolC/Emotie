import React from "react";
import { useParams } from "react-router-dom";

import { Container, Profile, Post, ProfileButton} from "./style";
import Header from "../../common/Header";
import PostCard from "../../common/PostCard";
import FloatingButton from "../../common/FloatingButton";
import { GiPencil } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md"

function DetailPage(props) {
    const { id, postId } = useParams();

    return (
        <Container>
            <Header></Header>
            <Profile>
                <ProfileButton children="프로필 가기>>"></ProfileButton>
            </Profile>
            <Post>
                <PostCard report share></PostCard>
            </Post>

            {/* DetailPage<br/>{id}의 {postId}번째 포스트 */}
        </Container>
    );
}

export default DetailPage;