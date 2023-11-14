import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {SWContext} from "../utils/context";
import {friends} from "../utils/constants";

const Header = () => {
    const {heroFromPath} = useContext(SWContext);

    return (
        <header className="rounded-top-5">
            <Navigation/>
            <h1 className="text-center fs-1 py-4">{friends[heroFromPath].name}</h1>
        </header>
    );
};

export default Header;