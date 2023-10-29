import React, {Component} from 'react';
import {url} from "../utils/constants";
import Spinner from 'react-bootstrap/Spinner';

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        const filmTitle = sessionStorage.getItem('filmTitle');
        const filmData = sessionStorage.getItem('filmData');

        if (filmTitle && filmData) {
            this.setState(
                {
                    isLoading: false,
                    filmTitle,
                    filmData
                });
        } else {
            fetch(`${url}films`)
                .then(response => response.json())
                .then(data => {
                    let episode = Math.floor(Math.random() * data.length);
                    this.setState(
                        {
                            isLoading: false,
                            filmTitle: data[episode].title,
                            filmData: data[episode].opening_crawl
                        });
                    sessionStorage.setItem('filmTitle', data[episode].title);
                    sessionStorage.setItem('filmData', data[episode].opening_crawl);
                })
        }


        // let episode = Math.floor(Math.random() * countOfEpisodes) + 1;
        //     fetch(`${url}films/${episode}`)
        //         .then(response => response.json())
        //         .then(data =>
        //         {
        //             this.setState(
        //                 {
        //                     isLoading: false,
        //                     filmTitle: data.title,
        //                     filmData: data.opening_crawl
        //                 });
        //         })
        //         .catch(e => alert(e))
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 style={{textTransform: "uppercase", textAlign: "center"}}>{this.state.filmTitle}</h1>
                    <p className="far-galaxy">{this.state.filmData}</p>
                </div>
            );
        }
    }

}
export default FarGalaxy;

