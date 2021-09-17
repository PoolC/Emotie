// 액션 타입
export const UPDATE_STATUS = 'auth/UPDATE_STATUS';

// 액션 생성 함수
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status: status });