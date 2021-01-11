import React from 'react';
import preloader from '../Images/loading.svg';
import './Preloader.css';

let Preloader = () => {
    return <img className = "preloader" src={preloader}/>
};

export default Preloader;