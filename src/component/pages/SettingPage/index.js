import React, { useState } from "react";

import { Container, Group, Element } from "./component";
import UpdateInfoFragment from "./fragment/UpdateInfoFragment";
import ChangePasswordFragment from "./fragment/ChangePasswordFragment";
import DeleteAccountFragment from "./fragment/DeleteAccountFragment";
import Alert from "@common/modal/Alert";

function SettingPage(props) {
    // 인터페이스
    const [category, setCategory] = useState(0);
    const [isSuccessAlertOpen, setSuccessAlertOpen] = useState(false);
    const [isCheckAlertOpen, setCheckAlertOpen] = useState(false);
    const [isErrorAlertOpen, setErrorAlertOpen] = useState(false);
    
    const [checkFunc, setCheckFunc] = useState(() => () => {});
    const [errorMessage, setErrorMessage] = useState('');

    // 클릭 이벤트
    const changeCategory = (id) => setCategory(id);

    // 알림
    const showSuccessAlert = () => setSuccessAlertOpen(true);
    const showCheckAlert = (func) => {
        setCheckFunc(() => () => func());
        setCheckAlertOpen(true);
    }
    const showErrorAlert = (message) => {
        setErrorMessage(message);
        setErrorAlertOpen(true);
    };

    return (
        <Container.Base>
            <Element.Header recommend feed/>
            <Container.Content>
                <Group.Category category={category} changeCategory={changeCategory}/>
                {category === 0 && <UpdateInfoFragment showSuccessAlert={showSuccessAlert} showErrorAlert={showErrorAlert}/>}
                {category === 1 && <ChangePasswordFragment showSuccessAlert={showSuccessAlert} showErrorAlert={showErrorAlert}/>}
                {category === 2 && <DeleteAccountFragment showSuccessAlert={showSuccessAlert} showCheckAlert={showCheckAlert} showErrorAlert={showErrorAlert}/>}
            </Container.Content>
            {/* 모달 */}
            <Alert
                message="성공적으로 처리되었습니다."
                isOpen={isSuccessAlertOpen}
                setOpen={setSuccessAlertOpen}/>
            <Alert
                title="계정 삭제"
                message="정말로 삭제하시겠습니까?"
                firstButton="확인"
                secondButton="취소"
                firstButtonFunc={checkFunc}
                isOpen={isCheckAlertOpen}
                setOpen={setCheckAlertOpen}/>
            <Alert
                title="오류"
                message={errorMessage}
                isOpen={isErrorAlertOpen}
                setOpen={setErrorAlertOpen}/>
        </Container.Base>
    );
}

export default SettingPage;