import React from 'react';
import {friends} from "../utils/constants";
import Friend from "./Friend";

const Friends = () =>
{
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            {friends.map((item, index) => <Friend key={index} img={item} pos={index+1}/>)}
        </section>
    );
};

export default Friends;