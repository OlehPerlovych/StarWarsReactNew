import React from 'react';
import friend1 from "../styles/images/friend1.jpg";
import friend2 from "../styles/images/friend2.jpg";
import friend3 from "../styles/images/friend3.jpg";
import friend4 from "../styles/images/friend4.jpg";
import friend5 from "../styles/images/friend5.jpg";
import friend6 from "../styles/images/friend6.jpg";
import friend7 from "../styles/images/friend7.jpg";
import friend8 from "../styles/images/friend8.jpg";
import friend9 from "../styles/images/friend9.jpg";

const Friend = () => {
    return (
        <div>
            <img className="col-4 p-1" src={friend1} alt="friend" />
            <img className="col-4 p-1" src={friend2} alt="friend" />
            <img className="col-4 p-1" src={friend3} alt="friend" />
            <img className="col-4 p-1" src={friend4} alt="friend" />
            <img className="col-4 p-1" src={friend5} alt="friend" />
            <img className="col-4 p-1" src={friend6} alt="friend" />
            <img className="col-4 p-1" src={friend7} alt="friend" />
            <img className="col-4 p-1" src={friend8} alt="friend" />
            <img className="col-4 p-1" src={friend9} alt="friend" />
        </div>

    );
};

export default Friend;