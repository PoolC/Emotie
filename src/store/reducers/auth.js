import { UPDATE_STATUS } from '@store/actions/auth';

const initialState = {
    /* 
    UNAUTHORIZED : 로그아웃 상태,
    AUTHORIZED : 로그인 상태,
    FAILED : 로그인 실패 상태,
    EXPIRED : 로그인 만료 상태
    */
    status: ''
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }
}

export default auth;