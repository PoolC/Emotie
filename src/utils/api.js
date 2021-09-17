import server from "./server";

export const login = ({ email, password }) => server.post('/auth/login', { email: email, password: password });
export const getUserInfo = () => server.get('/members/me');