import React from 'react';
import {SWContext} from "../utils/context";

const NavItem = ({text}) =>
{
    return (
        <SWContext.Consumer>
            {value => <li className="common-button nav-item mx-1 border border-light rounded-pill
                btn btn-danger" onClick={() => value.changePage(text)}>{text}</li>}
        </SWContext.Consumer>
    )
};

export default NavItem;