import React from 'react';

const NavItem = ({text}) => {
    return <li className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-button">{text}</li>;
};

export default NavItem;