import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "./style";

function MotieEditPage(props) {
    const { id } = useParams();
    
    return (
        <Container>
            MotieEditPage of {id}
        </Container>
    );
}

export default MotieEditPage;