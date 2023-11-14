import React, {useContext} from 'react';
import {navItems} from "../utils/constants";
import AboutMe from "./AboutMe/AboutMe";
import StarWars from "./StarWars";
import Contact from "./contact/Contact";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import {SWContext} from "../utils/context";

const Main = () => {
        const {setHeroFromPath} = useContext(SWContext);
    return (
        <Switch>
            <Route path={['/', `/${navItems[0].route}`, `/${navItems[0].route}/:heroId`]} component={Home} exact/>
            <Route path={[`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`]} exact
                   render={routeProps => <AboutMe {...routeProps} setHeroFromPath={setHeroFromPath}/>}/>
            <Route path={`/${navItems[2].route}`} component={StarWars} exact/>
            <Route path={`/${navItems[3].route}`} component={Contact} exact/>
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;