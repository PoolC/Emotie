import React from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function GuestBookPage(props) {
    const { id } = useParams();
    return (
        <Container>
            GuestBookPage of {id}
        </Container>
    );
}

export default GuestBookPage;