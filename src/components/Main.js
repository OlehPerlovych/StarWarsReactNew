import React from 'react';
import {navItems} from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./contact/Contact";
import Home from "./Home";
import {SWContext} from "../utils/context";

const Main = () => {
    return (
        <SWContext.Consumer>
            {value =>
            {
                switch(value.page)
                {
                    case navItems[1]: return <AboutMe/>
                    case navItems[2]: return <StarWars/>
                    case navItems[3]: return <Contact/>
                    default: return <Home/>
                }
            }}
        </SWContext.Consumer>)
};

export default Main;