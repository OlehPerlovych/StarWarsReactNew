import React from 'react';
import Hero from "./Hero";
import FarGalaxy from "./FarGalaxy";
import Friends from "./Friends";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </main>
    );
};

export default Main;