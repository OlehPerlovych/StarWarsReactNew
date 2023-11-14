import React, {useEffect, useState} from 'react';
import {url, period} from "../../utils/constants";
import styles from "./aboutMe.module.css"

const AboutMe = () =>
{
    const [hero, setHero] = useState({});

    useEffect(() =>
    {
        let hero = JSON.parse(localStorage.getItem('hero'));
        if (!hero || (Date.now() - hero.time) > period)
        {
            fetch(`${url}peoples/1`)
                .then(response => response.json())
                .then(data =>
                {
                    let info =
                        {
                            "name": data.name,
                            "height": data.height,
                            "mass": data.mass,
                            "hair_color": data.hair_color,
                            "skin_color": data.skin_color,
                            "eye_color": data.eye_color,
                            "birth_year": data.birth_year,
                            "gender": data.gender
                        };
                    setHero(info);
                    hero =
                        {
                            info,
                            time: Date.now()
                        };
                    localStorage.setItem('hero', JSON.stringify(hero));
                })
                .catch(e => console.log(e));
        } else
            setHero(hero.info);
    }, []);

    return (
        <div>
            {(hero) && <div className={`farGalaxy ${styles.hero_box}`}>
                <p><span className={styles.hero_titles}>Name: </span>{hero.name}</p>
                <p><span className={styles.hero_titles}>Height: </span>{hero.height}</p>
                <p><span className={styles.hero_titles}>Birth year: </span>{hero.birth_year}</p>
                <p><span className={styles.hero_titles}>Gender: </span>{hero.gender}</p>
                <p><span className={styles.hero_titles}>Mass: </span>{hero.mass}</p>
                <p><span className={styles.hero_titles}>Hair color: </span>{hero.hair_color}</p>
                <p><span className={styles.hero_titles}>Skin color: </span> {hero.skin_color}</p>
                <p><span className={styles.hero_titles}>Eye color: </span> {hero.eye_color}</p>
            </div>}
        </div>
    );
}

export default AboutMe;
