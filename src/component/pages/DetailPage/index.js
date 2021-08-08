import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "./style";

function DetailPage(props) {
    const { id, postId } = useParams();

    return (
        <Container>
            DetailPage<br/>{id}의 {postId}번째 포스트
        </Container>
    );
}

export default DetailPage;