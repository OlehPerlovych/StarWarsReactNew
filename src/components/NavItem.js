import React, {useContext} from 'react';
import {SWContext} from '../utils/context';

const NavItem = ({text}) => {
    const value = useContext(SWContext);

    return (
        <li
            className="common-button nav-item mx-1 border border-light rounded-pill btn btn-danger"
            onClick={() => value.changePage(text)}> {text.title}
        </li>
    );
};

export default NavItem;
