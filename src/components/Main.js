import React from 'react';
import {navItems} from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./contact/Contact";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = () => {
return(
    <Switch>
        <Route path={['/',`/${navItems[0].route}`]} component={Home} exact/>
        <Route path={`/${navItems[1].route}`} component={AboutMe} exact/>
        <Route path={`/${navItems[2].route}`} component={StarWars} exact/>
        <Route path={`/${navItems[3].route}`} component={Contact} exact/>
        <Route component={ErrorPage}/>
    </Switch>
)
};

export default Main;