import React, {useEffect, useState} from 'react';
import './contact.module.css';
import {url, periodForPlanets} from "../../utils/constants";

const Contact = () =>
{
    const [planetsArray, setPlanets] = useState(['wait...']);

    useEffect(() =>
    {
        let planets = JSON.parse(localStorage.getItem('planets'));
        if (!planets || (Date.now() - planets.time) > periodForPlanets)
            fillPlanets(`${url}planets`);
        else
            setPlanets(planets.listPlanets);
    }, []);

    const fillPlanets = url =>
    {
        fetch(url)
            .then(response => response.json())
            .then(array => array.map(item => item.name))
            .then(planets =>
            {
                setPlanets(planets);
                let info =
                    {
                        listPlanets: planets,
                        time: Date.now()
                    };
                localStorage.setItem('planets', JSON.stringify(info));
            })
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">{planetsArray.map((item, index) =>
                    <option value={item} key={index}>{item}</option>)}
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Contact;
