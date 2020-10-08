import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigaion from "components/Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigaion />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        {/* <Redirect from="*" to="/" /> */}
                    </>
                ) : (
                    <>
                    <Route exact path="/">
                        <Auth />
                    </Route>
                    {/* <Redirect from="*" to="/" /> */}
                    </>
                )}
            </Switch>
        </Router>
    )
};

export default AppRouter;