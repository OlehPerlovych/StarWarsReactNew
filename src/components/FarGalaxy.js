import React, {useEffect, useState} from 'react';
import {url} from "../utils/constants";
import Spinner from "react-bootstrap/Spinner";

const FarGalaxy = () =>
{
    const [data, setData] = useState({isLoading: true, filmTitle: '', filmData: ''});

    useEffect(() =>
    {
        const filmTitle = sessionStorage.getItem('filmTitle');
        const filmData = sessionStorage.getItem('filmData');
        if (filmTitle && filmData)
        {
            setData({isLoading: false, filmTitle, filmData})
        } else
        {
            fetch(`${url}films`)
                .then(response => response.json())
                .then(data =>
                {
                    let episode = Math.floor(Math.random() * data.length);
                    setData(
                        {
                            isLoading: false,
                            filmTitle: data[episode].title,
                            filmData: data[episode].opening_crawl
                        });
                    sessionStorage.setItem('filmTitle', data[episode].title);
                    sessionStorage.setItem('filmData', data[episode].opening_crawl);
                    console.log('fetch')
                })
                .catch(error => alert(error));


        }
    }, []);

    if(data.isLoading)
        return (<div className="text-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>)
    else
        return (
            <div>
                <h1 style={{textTransform: "uppercase", textAlign: "center"}}>{data.filmTitle}</h1>
                <p className="far-galaxy">{data.filmData}</p>
            </div>)
}

export default FarGalaxy;

