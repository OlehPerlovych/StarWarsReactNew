import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {SWContext} from "../utils/context";
import {characters, defaultHero} from "../utils/constants";

const Home = (props) =>
{
    const {setHeroFromPath} = useContext(SWContext);

    useEffect(() => {
        let key = props.match.params.heroId;
        if(!characters.includes(key))
            key = defaultHero;
        setHeroFromPath(key);
    }, []);

    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export default Home;