// 액션 타입
export const UPDATE_INFO = 'user/UPDATE_INFO';
export const RESET_INFO = 'user/RESET_INFO';

// 액션 생성 함수
export const updateInfo = ({ email, nickname, introduction, gender, birth }) => ({ 
    type: UPDATE_INFO,  
    email: email,
    nickname: nickname,
    introduction: introduction,
    gender: gender,
    birth: birth
});
export const resetInfo = () => ({ type: RESET_INFO });