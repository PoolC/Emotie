import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../common/Header";
import PillButton from "../../common/PillButton";
import PillInput from "../../common/PillInput";


import { 
    Container
} from "./style";

function RegisterPage(props) {
    return (
        <Container>
            <Header/>
            Emotie 회원가입
            <PillInput></PillInput>
            <PillInput></PillInput>
        </Container>
    );
}

export default RegisterPage;