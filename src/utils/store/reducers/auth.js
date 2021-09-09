import { UPDATE_TOKEN, DELETE_TOKEN } from '../actions/auth';

const initialState = {
    token: '',
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return { ...state, token: action.token };
        case DELETE_TOKEN:
            return { ...state, token: '' };
        default:
            return state;
    }
}

export default auth;