import React, {useState, useEffect} from 'react';
import {HERO, period, url} from '../utils/constants';

function AboutMe() {
    const [heroInfo, setHeroInfo] = useState({
        name: null,
        birth_year: null,
        gender: null,
        eye_color: null,
        hair_color: null,
        skin_color: null,
        height: null,
        mass: null,
    });

    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem(HERO));
        const fetchDataFromAPI = () => {
            fetch(`${url}peoples/1`)
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem(HERO, JSON.stringify({info: data, timeStamp: Date.now()}));
                    setHeroInfo(data);
                })
                .catch((error) => alert(error));
        };

        if (!hero || Date.now() - hero.timeStamp > period) {
            fetchDataFromAPI();
        } else {
            setHeroInfo(hero.info);
        }
    }, []);

    return (
        <div>
            <h1>About Me</h1>
            <p>Name: {heroInfo.name}</p>
            <p>Birth Year: {heroInfo.birth_year}</p>
            <p>Gender: {heroInfo.gender}</p>
            <p>Eye Color: {heroInfo.eye_color}</p>
            <p>Hair Color: {heroInfo.hair_color}</p>
            <p>Skin Color: {heroInfo.skin_color}</p>
            <p>Height: {heroInfo.height}</p>
            <p>Mass: {heroInfo.mass}</p>
        </div>
    );
}

export default AboutMe;
