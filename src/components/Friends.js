import React, {useContext} from 'react';
import {characters} from "../utils/constants";
import Friend from "./Friend";
import {SWContext} from "../utils/context";

const Friends = () => {
    const { heroFromPath } = useContext(SWContext);

    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            <h3 className="text-center col-12 text-uppercase">Friends</h3>
            <div className="row">
                {characters
                    .filter(item => item !== heroFromPath)
                    .map((item, index) => (
                        <div key={index} className="col-4 mb-3"> {/* Измените размеры колонок в соответствии с вашими требованиями */}
                            <Friend key={index} item={item} pos={index + 1} />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Friends;
