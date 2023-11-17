import { useEffect, useState } from 'react';
import {period, friends, characters, defaultHero, navItems} from "../../utils/constants";
import {useNavigate, useParams} from 'react-router-dom';
import styles from "./aboutMe.module.css";

const AboutMe = ({ setHeroFromPath }) => {
    const { heroId } = useParams();
    const [hero, setHero] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>
    {
        if(!characters.includes(heroId))
        {
            navigate(`/${navItems[0].route}/${defaultHero}`);
            return;
        }

        const fetchData = async () => {
            try {
                let heroData = JSON.parse(localStorage.getItem(heroId));
                if (!heroData || (Date.now() - heroData.time) > period) {
                    const response = await fetch(friends[heroId].url);
                    const data = await response.json();
                    const info = {
                        name: data.name,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color,
                        birth_year: data.birth_year,
                        gender: data.gender
                    };
                    setHero(info);
                    heroData = {
                        info,
                        time: Date.now()
                    };
                    localStorage.setItem(heroId, JSON.stringify(heroData));
                } else {
                    setHero(heroData.info);
                }
                setHeroFromPath(heroId);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [heroId, setHeroFromPath]);

    return (
        <div>
            {hero && (
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>Name: </span>{hero.name}</p>
                    <p><span className={styles.hero_titles}>Height: </span>{hero.height}</p>
                    <p><span className={styles.hero_titles}>Birth year: </span>{hero.birth_year}</p>
                    <p><span className={styles.hero_titles}>Gender: </span>{hero.gender}</p>
                    <p><span className={styles.hero_titles}>Mass: </span>{hero.mass}</p>
                    <p><span className={styles.hero_titles}>Hair color: </span>{hero.hair_color}</p>
                    <p><span className={styles.hero_titles}>Skin color: </span> {hero.skin_color}</p>
                    <p><span className={styles.hero_titles}>Eye color: </span> {hero.eye_color}</p>
                </div>
            )}
        </div>
    );
};

export default AboutMe;
