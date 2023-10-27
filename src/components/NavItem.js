import React from 'react';

const NavItem = ({text,changePage}) => {
    return <li className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-button"
        onClick={() => changePage(text)}>{text}</li>;
};

export default NavItem;