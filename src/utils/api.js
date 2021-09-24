import server from "./server";

export const login = ({ email, password }) => server.post('/auth/login', { email: email, password: password });
export const getUserInfo = () => server.get('/members/me');

// 설정
export const editUserInfo = (nickname, gender, birth) => server.put('/members', { nickname: nickname, gender: gender, dateOfBirth: birth });
export const checkPassword = (password) => server.get('/members/password', { password: password });
export const changePassword = (password, passwordCheck) => server.put('/members/password', { password: password, passwordCheck: passwordCheck });
export const deleteAccount = (nickname) => server.delete(`/members/${nickname}`);