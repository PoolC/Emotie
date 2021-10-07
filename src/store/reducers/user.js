import { UPDATE_INFO, RESET_INFO } from '../actions/user';

import { stringToNumber } from "../../utils/converter";

const initialState = {
    uuid: -1,
    email: "",
    nickname: "",
    introduction: "",
    gender: "",
    birth: { year: 1900, month: 1, day: 1 },
};

const divideBirth = (birthRaw) => {
    const birthArr = birthRaw.split('-');
    const year = stringToNumber(birthArr[0]);
    const month = stringToNumber(birthArr[1]);
    const day = stringToNumber(birthArr[2]);

    return { year, month, day };
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INFO:
            return { 
                ...state, 
                uuid: action.uuid,
                email: action.email,
                nickname: action.nickname,
                introduction: action.introduction,
                gender: action.gender,
                birth: divideBirth(action.birth),
            };
        case RESET_INFO:
            return { 
                ...state, 
                uuid: -1,
                email: "",
                nickname: "",
                introduction: "",
                gender: "",
                birth: { year: 1900, month: 1, day: 1 },
            };
        default:
            return state;
    }
}

export default user;