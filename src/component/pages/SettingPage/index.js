import React, { useEffect, useState } from "react";

import { 
    Container, ContentLayout, 
    CategoryLayout, Category,
    FrameLayout, Description
} from "./style";
import Header from "../../common/Header";

function SettingPage(props) {
    const [category, setCategory] = useState(0);

    useEffect(() => {
        setCategory(0);
    }, []);

    // Fragment
    const settings = () => {
        switch(category)
        {
            case 0:
                return (
                    <FrameLayout>

                    </FrameLayout>
                );
            case 1:
                return (
                    <FrameLayout>

                    </FrameLayout>
                );
            case 2:
                return (
                    <FrameLayout>
                        
                    </FrameLayout>
                );
            default:
                return null;
        }
    }

    return (
        <Container>
            <Header recommend feed/>
            <ContentLayout>
                <CategoryLayout>
                    <Category onClick={() => setCategory(0)} selected={category === 0}>개인정보 관리</Category>
                    <Category onClick={() => setCategory(1)} selected={category === 1}>비밀번호 변경</Category>
                    <Category onClick={() => setCategory(2)} selected={category === 2}>계정 삭제</Category>
                </CategoryLayout>
                {settings()}
            </ContentLayout>
        </Container>
    );
}

export default SettingPage;