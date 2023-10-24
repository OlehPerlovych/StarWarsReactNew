import React from 'react';
import Friend from "./Friend";

const images = require.context('../styles/images/friends');
const imageFiles = images.keys();
const importedImages = imageFiles.map(images);

const Friends = () =>{
    return (
         <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
             <h3 className="text-center col-12 text-uppercase">Friends</h3>
            {importedImages.map((img,index)=> <Friend image={img} key={index}/>)}
         </section>
    )
}


export default Friends;
