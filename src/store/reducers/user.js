import { UPDATE_INFO, RESET_INFO } from '../actions/user';

const initialState = {
    email: "",
    nickname: "",
    introduction: "",
    gender: "",
    birth: "",
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INFO:
            return { 
                ...state, 
                email: action.email,
                nickname: action.nickname,
                introduction: action.introduction,
                gender: action.gender,
                birth: action.birth,
            };
        case RESET_INFO:
            return { 
                ...state, 
                email: "",
                nickname: "",
                introduction: "",
                gender: "",
                birth: "",
            };
        default:
            return state;
    }
}

export default user;