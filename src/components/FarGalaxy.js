import React, {Component} from 'react';
import {url} from "../utils/constants";

class FarGalaxy extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount()
    {
        fetch(`${url}films`)
            .then(response => response.json())
            .then(data =>
            {
                let episode = Math.floor(Math.random() * data.length);
                this.setState(
                    {
                        isLoading: false,
                        filmTitle: data[episode].title,
                        filmData: data[episode].opening_crawl
                    });
            })

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

    render()
    {
        if(this.state.isLoading)
            return <p className="far-galaxy">'Loading...'</p>
        else
            return (
                <div>
                    <h1 style={{textTransform: "uppercase", textAlign: "center"}}>{this.state.filmTitle}</h1>
                    <p className="far-galaxy">{this.state.filmData}</p>
                </div>)
    }
}

export default FarGalaxy;

