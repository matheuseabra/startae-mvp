import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/profile' component={Profile} />
        </Switch>
    </BrowserRouter>
)

export default Router;