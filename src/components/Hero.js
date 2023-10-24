import React from 'react';
import hero from '../styles/images/main.jpg';

const Hero = () => {
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img className="w-100" src={hero} alt="hero" />
        </section>
    );
};

export default Hero;