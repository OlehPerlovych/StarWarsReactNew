import './App.css';
import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import {SWContext} from "./utils/context"


const App = () =>
{
    const getItemByRoute = () =>{
        const route = window.location.hash.substring(2);
        return navItems.find(item => item.route === route) ?? navItems[0];
    }
    const [page, setPage] = useState(getItemByRoute());

    useEffect(() => {
        window.addEventListener('hashchange', () =>
        {
            const newPage = getItemByRoute();
            setPage(newPage);
        })
    }, []);

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
