const NavItem = ({text}) => {
    return (
        <li
            className="common-button nav-item mx-1 border border-light rounded-pill btn btn-danger"
            onClick={() => window.location.hash = `#/${text.route}`}> {text.title}
        </li>
    );
};

export default NavItem;
