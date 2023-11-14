import {Link} from "react-router-dom";
import {useContext} from "react";
import {SWContext} from "../utils/context";
import {navItems} from "../utils/constants";

const NavItem = ({text}) => {
    const {heroFromPath} = useContext(SWContext);
    let route = `/${text.route}`;
    if(text.route === navItems[0].route || text.route === navItems[1].route)
        route += `/${heroFromPath}`
    return (
        <Link className="common-button nav-item mx-1 border border-light rounded-pill btn btn-danger"
        to={route}>
            {text.title}
        </Link>
    );
};

export default NavItem;
