import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./component/pages/LandingPage/index";
import LoginPage from "./component/pages/LoginPage/index";
import RegisterPage from "./component/pages/RegisterPage/index";
import FindPage from "./component/pages/FindPage/index";
import ProfilePage from "./component/pages/ProfilePage/index";
import ProfileEditPage from "./component/pages/ProfileEditPage/index";
import MotieEditPage from "./component/pages/MotieEditPage/index";
import WritePage from "./component/pages/WritePage/index";
import FeedPage from "./component/pages/FeedPage/index";
import RecommendPage from "./component/pages/RecommendPage/index";
import SettingPage from "./component/pages/SettingPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>

        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/find" component={FindPage}/>

        <Route exact path="/profile/:id" component={ProfilePage}/>
        <Route exact path="/profile/:id/edit" component={ProfileEditPage}/>
        <Route exact path="/profile/:id/motie-edit" component={MotieEditPage}/>
        <Route exact path="/profile/:id/write" component={WritePage}/>

        <Route exact path="/feed" component={FeedPage}/>
        <Route exact path="/recommend" component={RecommendPage}/>

        <Route exact path="/setting" component={SettingPage}/>
        <Route exact path="/error" component={ErrorPage}/>

        <Route component={() => <Redirect to="/"/>}/>
      </Switch>
    </Router>
  );
}

export default App;
