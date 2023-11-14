import {Link} from "react-router-dom";

const NavItem = ({text}) => {
    return (
        <Link className="common-button nav-item mx-1 border border-light rounded-pill btn btn-danger"
        to={`/${text.route}`}>
            {text.title}
        </Link>
    );
};

export default NavItem;
