import { takeLatest } from "redux-saga/effects";

import { LOGIN, LOGOUT, EXPIRE, INIT_USER } from "../actions/_saga";
import { loginSaga, logoutSaga, expireSaga, initUserSaga } from "../reducers/_saga";

function* rootSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(EXPIRE, expireSaga);
    yield takeLatest(INIT_USER, initUserSaga);
}

export default rootSaga;