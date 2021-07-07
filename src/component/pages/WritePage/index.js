import React from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function WritePage(props) {
    const { id } = useParams();
    return (
        <Container>
            WritePage of {id}
        </Container>
    );
}

export default WritePage;