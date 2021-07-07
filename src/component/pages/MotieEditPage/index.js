import React from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function MotieEditPage(props) {
    const { id } = useParams();
    return (
        <Container>
            MotieEditPage of {id}
        </Container>
    );
}

export default MotieEditPage;