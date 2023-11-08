import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import {SWContext} from "./utils/context"

const App = () =>
{
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className="container-fluid">
            <SWContext.Provider value={{changePage: setPage, page}}>
                <Header/>
                <Main/>
            </SWContext.Provider>
            <Footer/>
        </div>
    );

}

export default App;
