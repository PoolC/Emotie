import server from "./server";

// 회원
export const register = (nickname, password, rePassword, gender, dateOfBirth, email) => server.post('/members', {nickname: nickname, password: password, passwordCheck: rePassword, gender: gender, dateOfBirth: dateOfBirth, email: email});
export const getUserInfo = () => server.get('/members/me');
export const checkNicknameDuplicated = (nickname) => server.post('/members/nickname', { nickname: nickname });
export const updateUserInfo = (nickname, gender, birth) => server.put('/members', { nickname: nickname, gender: gender, dateOfBirth: birth });
export const changePassword = (currentPassword, password, passwordCheck) => server.put('/members/password', { currentPassword: currentPassword, password: password, passwordCheck: passwordCheck });
export const deleteAccount = (currentPassword, reason) => server.delete('/members', { currentPassword: currentPassword, reason: reason });
export const toggleFollow = (memberId) => server.post(`/members/follow/${memberId}`);

// 인증
export const pwResetEmail = (email) => server.post(`/auth/password-reset?email=${email}`);
export const pwResetCheck = (token, email, password, passwordCheck) => server.put(`/auth/password-reset?passwordResetToken=${token}`, {email: email, password: password, passwordCheck: passwordCheck});
export const activateAccount = (email, token) => server.put(`/auth/authorization?email=${email}&authorizationToken=${token}`);
export const login = ({ email, password }) => server.post('/auth/login', { email: email, password: password });

// 다이어리
export const getProfileDiaries = (memberId, pageNum) => server.get(`/diaries/user/${memberId}?page=${pageNum}`);
export const uploadPost = (emotion, content, isPrivate) => server.post('/diaries', { emotion: emotion, content: content, isOpened:  isPrivate });
export const blur = (id) => server.post(`/diaries/blind/${id}`);
export const reportDiary = (id, reason) => server.post(`/diaries/report/${id}`, { reason: reason });
export const deleteDiary = (id) => server.delete('/diaries', { data: { diaryId: [id] }});
export const getFeeds = (pageNumber) => server.get(`/diaries/feed?page=${pageNumber}`);
export const getDiary = (id) => server.get(`/diaries/${id}`);


// 방명록
export const getProfileGuestbooks = (memberId, pageNum) => server.get(`/guestbooks/user/${memberId}?page=${pageNum}`);
export const uploadGuestbook = (memberId, content) => server.post(`/guestbooks/user/${memberId}`, { content: content });
export const reportGuestbook = (id, reason) => server.post(`/guestbooks/report/${id}`, { reason: reason });
export const deleteGuestbook = (id) => server.delete(`/guestbooks/${id}`);

// 프로필
export const getProfileInfo = (memberId) => server.get(`/profiles/${memberId}`);
export const editProfile = (introduction, motie) => server.put('/profiles', { introduction: introduction, characterName: motie });
export const getRecommends = () => server.get('/recommend');
export const getSearch = (keyword, page) => server.get(`/search/${keyword}?page=${page}`);
