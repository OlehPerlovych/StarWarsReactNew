import React from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {navItems} from "../utils/constants";
import {withHeroId} from "../HOC/withHeroId";

const Home = () =>
{
    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export default withHeroId(Home, navItems[0].route);