import React from 'react';
import { Link } from 'react-router-dom';
import { friends, navItems } from '../utils/constants';

const Friend = ({ item, pos }) => {
    let style = "col-4";
    return (
        <Link to={`/${navItems[0].route}/${item}`}>
            <img
                className={`w-100 h-100 ${style}`}
                src={friends[item].img}
                alt={friends[item].name}
                style={pos === 7 ? { borderBottomLeftRadius: '10%' } : pos === 9 ? { borderBottomRightRadius: '10%' } : {}}
            />
        </Link>
    );
};

export default Friend;
