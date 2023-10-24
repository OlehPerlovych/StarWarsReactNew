import React from 'react';

const Hero = () => {
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img className="w-100" src={require('../styles/images/main.jpg')} alt="hero" />
        </section>
    );
};

export default Hero;