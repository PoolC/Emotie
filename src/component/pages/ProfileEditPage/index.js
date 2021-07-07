import React from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function ProfileEditPage(props) {
    const { id } = useParams();
    return (
        <Container>
            ProfileEditPage of {id}
        </Container>
    );
}

export default ProfileEditPage;