import React, {useContext} from 'react';
import {navItems} from "../utils/constants";
import AboutMe from "./AboutMe/AboutMe";
import StarWars from "./StarWars";
import Contact from "./contact/Contact";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import {SWContext} from "../utils/context";
import {Route, Routes} from "react-router-dom";

const Main = () =>
{
    const {setHeroFromPath} = useContext(SWContext);
    return (
        <Routes>
            {['/', `${navItems[0].route}`, `${navItems[0].route}/:heroId`].map(path =>
                <Route path={path} key={path} element={<Home/>}/>)}

            <Route path={`${navItems[1].route}`} element={<AboutMe setHeroFromPath={setHeroFromPath}/>}>
                <Route path={':heroId'} element={<AboutMe setHeroFromPath={setHeroFromPath}/>}/>

            </Route>

            <Route path={`/${navItems[2].route}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3].route}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;