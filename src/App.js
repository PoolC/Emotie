import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as saga from "./store/actions/_saga";
import * as user from "./store/actions/user";

import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import LandingPage from "./component/pages/LandingPage/index";
import LoginPage from "./component/pages/LoginPage/index";
import RegisterPage from "./component/pages/RegisterPage/index";
import FindPage from "./component/pages/FindPage/index";
import ProfilePage from "./component/pages/ProfilePage/index";
import MotieEditPage from "./component/pages/MotieEditPage/index";
import DetailPage from "./component/pages/DetailPage/index";
import WritePage from "./component/pages/WritePage/index";
import FeedPage from "./component/pages/FeedPage/index";
import RecommendPage from "./component/pages/RecommendPage/index";
import SettingPage from "./component/pages/SettingPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";
import TestPage from "./component/pages/TestPage/index";

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
                break;
            default:
                break;
        }
    }, [authStatus, dispatch]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={withRouter(LandingPage)}/>

                <Route exact path="/login" component={withRouter(LoginPage)}/>
                <Route exact path="/register" component={withRouter(RegisterPage)}/>
                <Route exact path="/find" component={withRouter(FindPage)}/>

                <Route exact path="/profile/:id" component={withRouter(ProfilePage)}/>
                <Route exact path="/profile/:id/motie-edit" component={withRouter(MotieEditPage)}/>
                <Route exact path="/profile/:id/post/:postId" component={withRouter(DetailPage)}/>
                <Route exact path="/write" component={withRouter(WritePage)}/>

                <Route exact path="/feed" component={withRouter(FeedPage)}/>
                <Route exact path="/recommend" component={withRouter(RecommendPage)}/>

                <Route exact path="/setting" component={withRouter(SettingPage)}/>
                
                <Route exact path="/error" component={withRouter(ErrorPage)}/>
                <Route exact path="/test" component={withRouter(TestPage)}/>

                <Route component={() => <Redirect to="/"/>}/>
            </Switch>
        </Router>
    );
}

export default App;
