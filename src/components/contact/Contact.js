import React, { Component } from 'react';
import styles from './contact.module.css';
import {LAST_UPDATE, periodForPlanets, PLANETS, url} from "../../utils/constants";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            lastUpdate: null,
        };
    }

    componentDidMount() {
        this.checkAndUpdatePlanets();
    }

    fetchPlanets = () => {
        fetch(`${url}planets`)
            .then((response) => response.json())
            .then(data => {
                const planetNames = data.map(planet => planet.name);
                localStorage.setItem(PLANETS, JSON.stringify(planetNames));
                localStorage.setItem(LAST_UPDATE, Date.now().toString());
                this.setState({
                    planets: planetNames,
                    lastUpdate: Date.now(),
                });
            })
            .catch(error => alert(error));
    }

    checkAndUpdatePlanets = () => {
        const lastUpdate = localStorage.getItem(LAST_UPDATE);
        if (!lastUpdate) {
            this.fetchPlanets();
        } else {
            if (Date.now() - lastUpdate >= periodForPlanets) {
                this.fetchPlanets();
            } else {
                const storedPlanets = JSON.parse(localStorage.getItem(PLANETS));
                this.setState({
                    planets: storedPlanets,
                    lastUpdate: lastUpdate,
                });
            }
        }
    };

    render() {
        return (
            <div>
                <form className={styles.container}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className={styles.inputField} />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className={styles.inputField} />

                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet" className={styles.inputField}>
                        {this.state.planets.map((planet, index) => (
                            <option key={index} value={planet}>
                                {planet}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} className={styles.inputField}></textarea>

                    <input className='btn btn-danger border border-light rounded-pill mx-1 common-button' value="Submit" onClick={()=>alert('Button')}/>
                </form>
            </div>
        );
    }
}

export default Contact;
