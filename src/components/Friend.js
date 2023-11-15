import React from 'react';
import { Link } from 'react-router-dom';
import { friends, navItems } from '../utils/constants';

const Friend = ({ item, pos }) => {
    let style = "col-4 p-1";

    if (pos === 7) {
        style += ' left-bottom-corner';
    } else if (pos === 9) {
        style += ' right-bottom-corner';
    }

    return (
        <Link to={`/${navItems[0].route}/${item}`}>
            <img
                className={`img-fluid w-100 h-100 ${style}`}
                src={friends[item].img}
                alt={friends[item].name}
                style={pos === 7 ? { borderBottomLeftRadius: '10%' } : pos === 9 ? { borderBottomRightRadius: '10%' } : {}}
            />
        </Link>
    );
};

export default Friend;
