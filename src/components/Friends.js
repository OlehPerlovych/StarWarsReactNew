import React from 'react';
import Friend from "./Friend";

const Friends = () => {
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            <Friend/>
        </section>
    );
};

export default Friends;