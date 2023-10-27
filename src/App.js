import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import './App.css';

class App extends Component
{ constructor(props) {
    super(props);
    this.state = {activePage: navItems[0]}
}

changePage = page => this.setState({activePage: page})
    render()
    {
        return (
                <div className="container-fluid">
                    <Header changePage={this.changePage}/>
                    <Main page={this.state.activePage}/>
                    <Footer/>
                </div>
        );
    }
}

export default App;