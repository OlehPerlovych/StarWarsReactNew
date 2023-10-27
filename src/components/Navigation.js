import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = (props) => {
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                {navItems.map(item => <NavItem key={item} text={item} changePage={props.changePage}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;