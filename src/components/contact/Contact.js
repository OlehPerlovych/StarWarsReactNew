import React, { Component } from 'react';
import styles from './contact.module.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <form className={styles.container}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className={styles.inputField} />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className={styles.inputField} />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" className={styles.inputField}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} className={styles.inputField}></textarea>

                    <input className='btn btn-danger border border-light rounded-pill mx-1 common-button' value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;
