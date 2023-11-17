import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {SWContext} from "../utils/context";
import {characters, defaultHero} from "../utils/constants";
import {useParams} from "react-router-dom";

const Home = () =>
{
    let {heroId} = useParams();
    const {setHeroFromPath} = useContext(SWContext);

    useEffect(() => {
        if(!characters.includes(heroId))
            heroId = defaultHero;
        setHeroFromPath(heroId);
    }, [heroId]);

    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export default Home;