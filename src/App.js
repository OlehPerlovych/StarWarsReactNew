import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import {SWContext} from "./utils/context"
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state =
        {
            activePage: navItems[0]
        }
}

    changeActivePage = page => this.setState({activePage: page})
    render()
    {
        return (
            <div className="container-fluid">
                <SWContext.Provider value={
                    {
                        changePage : this.changeActivePage,
                        page: this.state.activePage
                    }
                }>
                    <Header/>
                    <Main/>
                </SWContext.Provider>
                <Footer/>
            </div>
        );
    }
}

export default App;