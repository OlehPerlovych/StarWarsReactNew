import React, {useContext} from 'react';
import {SWContext} from "../utils/context";
import {friends} from "../utils/constants";

const Hero = () => {
    const {heroFromPath} = useContext(SWContext);
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img className="w-100" src={friends[heroFromPath].img} alt={friends[heroFromPath].name} />
        </section>
    );
};

export default Hero;