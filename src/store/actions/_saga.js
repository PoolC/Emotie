// 액션 타입
export const LOGIN = 'saga/LOGIN';
export const LOGOUT = 'saga/LOGOUT';
export const EXPIRE = 'saga/EXPIRE';
export const INIT_USER = 'saga/INIT_USER';

// 액션 생성 함수
export const login = ({ email, password }) => ({ type: LOGIN, email: email, password: password });
export const logout = () => ({ type: LOGOUT });
export const expire = () => ({ type: EXPIRE });
export const initUser = () => ({ type: INIT_USER });