import { call, put } from "redux-saga/effects";
import { login, getUserInfo } from "../../utils/api";

import * as auth from "../actions/auth";
import * as user from "../actions/user";

export function* loginSaga(action) {
    try {
        const payload = { email: action.email, password: action.password };
        const response = yield call(login, payload);
        yield localStorage.setItem('accessToken', response.data.accessToken);
        yield put(auth.updateStatus('AUTHORIZED'));
    }
    catch (error) {
        console.log(error);
        yield put(auth.updateStatus('FAILED'));
    }
}

export function* logoutSaga(action) {
    yield localStorage.removeItem('accessToken');
    yield put(auth.updateStatus('UNAUTHORIZED'));
}

export function* expireSaga(action) {
    yield localStorage.removeItem('accessToken');
    yield put(auth.updateStatus('EXPIRED'));
}

export function* initUserSaga(action) {
    try {
        const response = yield call(getUserInfo);
        const userInfo = {
            memberId: response.data.memberId,
            email: response.data.email,
            nickname: response.data.nickname,
            gender: response.data.gender,
            birth: response.data.dateOfBirth,
        };
        yield put(user.updateInfo(userInfo));
    }
    catch (error) {
        console.log(error);
    }
}