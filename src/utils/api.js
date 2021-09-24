import server from "./server";

// 로그인
export const login = ({ email, password }) => server.post('/auth/login', { email: email, password: password });
export const getUserInfo = () => server.get('/members/me');

// 프로필
export const getProfileInfo = (nickname) => server.get(`/profiles/${nickname}`);
export const editNickname = (nickname) => server.put('/profiles', { nickname: nickname });
export const editIntroduction = (introduction) => server.put('/profiles', { introduction: introduction });

// 구독
export const follow = (nickname, state) => server.post(`/members/follow/${nickname}`, { isFollowing: state });