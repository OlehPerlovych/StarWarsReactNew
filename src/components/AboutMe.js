import React, { Component } from 'react';
import { period, url } from "../utils/constants";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": null,
            "birth_year": null,
            "gender": null,
            "eye_color": null,
            "hair_color": null,
            "skin_color": null,
            "height": null,
            "mass": null
        }
    }

    componentDidMount() {
        const hero = JSON.parse(localStorage.getItem('hero'));

        if (!hero || (Date.now() - hero.timeStamp) > period) {
            this.fetchDataFromAPI();
        } else {
            this.setState(hero.info);
        }
    }

    fetchDataFromAPI() {
        fetch(`${url}peoples/1`)
            .then((response) => response.json())
            .then((data) => {
                this.setState(data);
                localStorage.setItem('hero', JSON.stringify({ info: data, timeStamp: Date.now()}));
            })
            .catch(error => alert(error));
    };

    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p>Name: {this.state.name}</p>
                <p>Birth Year: {this.state.birth_year}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Eye Color: {this.state.eye_color}</p>
                <p>Hair Color: {this.state.hair_color}</p>
                <p>Skin Color: {this.state.skin_color}</p>
                <p>Height: {this.state.height}</p>
                <p>Mass: {this.state.mass}</p>
            </div>
        );
    }
}
export default AboutMe;
