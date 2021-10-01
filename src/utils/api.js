import server from "./server";

// 가입
export const register = (nickname, password, rePassword, gender, dateOfBirth, email) => server.post('/members', {nickname: nickname, password: password, passwordCheck: rePassword, gender: gender, dateOfBirth: dateOfBirth, email: email});

// 인증
export const pwResetEmail = (email) => server.post(`/auth/password-reset?email=${email}`);
export const pwResetCheck = (token, email, password, passwordCheck) => server.put(`/auth/password-reset?passwordRestToken=${token}`, {email: email, password: password, passwordCheck: passwordCheck});
export const activateAccount = (email, token) => server.put(`/auth/authorization?email=${email}&authorizationToken=${token}`);

// 로그인
export const login = ({ email, password }) => server.post('/auth/login', { email: email, password: password });
export const getUserInfo = () => server.get('/members/me');

// 프로필
export const getProfileInfo = (nickname) => server.get(`/profiles/${nickname}`);
export const editNickname = (nickname) => server.put('/profiles', { nickname: nickname });
export const editIntroduction = (introduction) => server.put('/profiles', { introduction: introduction });

// 설정
export const checkNicknameDuplicated = (nickname) => server.get('/members/nickname', { nickname: nickname });
export const editUserInfo = (nickname, gender, birth) => server.put('/members', { nickname: nickname, gender: gender, dateOfBirth: birth });
export const checkPassword = (password) => server.get('/members/password', { password: password });
export const changePassword = (password, passwordCheck) => server.put('/members/password', { password: password, passwordCheck: passwordCheck });
export const deleteAccount = (nickname) => server.delete(`/members/${nickname}`);

// 구독
export const follow = (nickname, state) => server.post(`/members/follow/${nickname}`, { isFollowing: state });

// 불러오기
export const getRecommends = () => server.get('/recommend');
export const getFeeds = () => server.get('/feed');

// 등록
export const uploadPost = (emotion, content, isPrivate) => server.post('/diaries', { emotion: emotion, content: content, isOpened:  isPrivate });

// 다이어리 및 방명록 관리
export const blur = (id) => server.post(`/diaries/blind/${id}`);
export const reportDiary = (id) => server.post(`/diaries/report/${id}`);
export const reportGuestbook = (id) => server.post(`/guestbooks/report/${id}`);
export const deleteDiary = (id) => server.delete('/diaries', { id: [id] });
export const deleteGuestbook = (id) => server.delete(`/guestbooks/${id}`);