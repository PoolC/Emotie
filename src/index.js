import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootSaga from './store/middleware/saga';
import reducers from './store/reducers/_all';
import * as auth from './store/actions/auth';

import App from './App';
import './index.css';

// Store 옵션
const sagaMiddleWare = createSagaMiddleware();

// Store 생성
export const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

// rootSaga 적용
sagaMiddleWare.run(rootSaga);

// 리로드 시 로그인 유지
if (localStorage.getItem('accessToken')) 
    store.dispatch(auth.updateStatus('AUTHORIZED'));
else 
    store.dispatch(auth.updateStatus('UNAUTHORIZED'));

// 리로드 시 특정값 초기화
window.onbeforeunload = function (e) {
    window.localStorage.setItem("page", 1);
};

// 렌더
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
