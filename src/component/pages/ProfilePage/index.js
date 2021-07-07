import React from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

function ProfilePage(props) {
    const { id } = useParams();
    return (
        <Container>
            ProfilePage of {id}
        </Container>
    );
}

export default ProfilePage;