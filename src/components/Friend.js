import React from 'react';
import {Link} from "react-router-dom";
import {friends, navItems} from "../utils/constants";
const Friend = ({item, pos}) =>
{
    let style = "col-4 p-1";
    if(pos === 7)
        style += ' left';
    else if(pos === 9)
        style += ' right';
    return <Link to={`/${navItems[0].route}/${item}`}>
        <img className={style} src={friends[item].img} alt={friends[item].name}/>
    </Link>
};

export default Friend;