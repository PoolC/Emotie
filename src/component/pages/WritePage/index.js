import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "./style";

function WritePage(props) {
    const { id } = useParams();
    
    return (
        <Container>
            WritePage of {id}
        </Container>
    );
}

export default WritePage;