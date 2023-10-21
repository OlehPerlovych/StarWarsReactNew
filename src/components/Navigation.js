import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                {navItems.map(item => <NavItem key={item} text={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;