import React from 'react';
const Friend = ({image}) =>{
    return(
        <>
            <img className="col-4 p-1" src={image} alt="friend"/>
        </>
    );
}
export default Friend;