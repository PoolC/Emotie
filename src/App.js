import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as saga from "@store/actions/_saga";
import * as user from "@store/actions/user";

import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { forAuthorized, forUnauthorized } from "@hoc/authChecker";

import LandingPage from "@pages/LandingPage/index";
import LoginPage from "@pages/LoginPage/index";
import RegisterPage from "@pages/RegisterPage/index";
import FindPage from "@pages/FindPage/index";
import ResetPage from "@pages/ResetPage/index";
import AuthPage from "@pages/AuthPage/index";
import ProfilePage from "@pages/ProfilePage/index";
import DetailPage from "@pages/DetailPage/index";
import WritePage from "@pages/WritePage/index";
import FeedPage from "@pages/FeedPage/index";
import RecommendPage from "@pages/RecommendPage/index";
import SearchPage from "@pages/SearchPage/index";
import SettingPage from "@pages/SettingPage/index";
import ErrorPage from "@pages/ErrorPage/index";
import TestPage from "@pages/TestPage/index";

function App() {
    const authStatus = useSelector(store => store.auth.status);
    const dispatch = useDispatch();

    // 로그인 상태 반영
    useEffect(() => {
        switch (authStatus) {
            case 'AUTHORIZED':
                dispatch(saga.initUser());
                break;
            case 'UNAUTHORIZED':
            case 'FAILED':
            case 'EXPIRED':
                dispatch(user.resetInfo());
                localStorage.clear();
                break;
            default:
                break;
        }
    }, [authStatus, dispatch]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={forUnauthorized(withRouter(LandingPage), authStatus)}/>

                <Route exact path="/login" component={forUnauthorized(withRouter(LoginPage), authStatus)}/>
                <Route exact path="/register" component={forUnauthorized(withRouter(RegisterPage), authStatus)}/>
                <Route exact path="/find" component={forUnauthorized(withRouter(FindPage), authStatus)}/>

                <Route exact path="/auth/authorization" component={forUnauthorized(withRouter(AuthPage), authStatus)}/>
                <Route exact path="/auth/password-reset" component={forUnauthorized(withRouter(ResetPage), authStatus)}/>

                <Route exact path="/profile/:memberId" render={(props) => forAuthorized(withRouter(ProfilePage), authStatus)({ key: props.match.params.memberId, ...props })}/>
                <Route exact path="/profile/post/:postId" component={withRouter(DetailPage)}/>
                <Route exact path="/write" component={forAuthorized(withRouter(WritePage), authStatus)}/>

                <Route exact path="/feed" component={forAuthorized(withRouter(FeedPage), authStatus)}/>
                <Route exact path="/recommend" component={forAuthorized(withRouter(RecommendPage), authStatus)}/>
                <Route exact path="/search" component={forAuthorized(withRouter(SearchPage), authStatus)}/>

                <Route exact path="/setting" component={forAuthorized(withRouter(SettingPage), authStatus)}/>
                
                <Route exact path="/error" component={withRouter(ErrorPage)}/>
                <Route exact path="/test" component={withRouter(TestPage)}/>

                <Route component={() => <Redirect to="/"/>}/>
            </Switch>
        </Router>
    );
}

export default App;
