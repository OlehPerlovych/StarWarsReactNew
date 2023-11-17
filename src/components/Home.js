import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {SWContext} from "../utils/context";
import {characters, defaultHero, navItems} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";

const Home = () =>
{
    const {setHeroFromPath} = useContext(SWContext);
    let {heroId} = useParams();
    const navigate = useNavigate();

    useEffect(() =>
    {
        if(!characters.includes(heroId))
        {
            navigate(`/${navItems[0].route}/${defaultHero}`);
            return;
        }

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