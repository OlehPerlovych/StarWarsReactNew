import React, {Component} from 'react';
import {period} from "../utils/constants";

class AboutMe extends Component
{

    constructor(props) {
        super(props);
        this.state =
            {
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

    componentDidMount()
    {
        const hero = JSON.parse(localStorage.getItem('hero'));

        if(!hero || (Date.now()- hero.timeStamp) > period)
        {
            fetch()
        }
        else
        {
            this.setState(hero.info);
        }
    }

    render()
    {
        return (
            <div>
                About me
            </div>
        );
    }
}

export default AboutMe;