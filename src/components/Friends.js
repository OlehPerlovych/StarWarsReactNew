import React, {useContext} from 'react';
import {characters} from "../utils/constants";
import Friend from "./Friend";
import {SWContext} from "../utils/context";

const Friends = () =>
{
    const {heroFromPath} = useContext(SWContext);
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            {characters.filter(item => item !== heroFromPath).map((item, index) => <Friend key={index} item={item} pos={index+1}/>)}
        </section>
    );
};

export default Friends;