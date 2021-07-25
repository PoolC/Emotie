import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "./style";

function ProfilePage(props) {
    const { id } = useParams();
    
    return (
        <Container>
            ProfilePage of {id}
        </Container>
    );
}

export default ProfilePage;