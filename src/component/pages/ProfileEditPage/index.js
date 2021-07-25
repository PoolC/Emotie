import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "./style";

function ProfileEditPage(props) {
    const { id } = useParams();
    
    return (
        <Container>
            ProfileEditPage of {id}
        </Container>
    );
}

export default ProfileEditPage;