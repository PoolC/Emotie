export const UPDATE_TOKEN = 'auth/UPDATE_TOKEN';
export const DELETE_TOKEN = 'auth/DELETE_TOKEN';

export const updateToken = (token) => ({ type: UPDATE_TOKEN, token: token });
export const deleteToken = () => ({ type: DELETE_TOKEN });