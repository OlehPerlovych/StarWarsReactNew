import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context";
import {useNavigate, useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants";

export const withHeroId = (Component, route) => props =>
{
    const {setHeroFromPath} = useContext(SWContext);
    let {heroId} = useParams();
    const navigate = useNavigate();

    useEffect(() =>
    {
        if(!characters.includes(heroId))
        {
            navigate(`/${route}/${defaultHero}`);
            return;
        }

        setHeroFromPath(heroId);
    }, [heroId]);
    return <Component {...props}/>;
}