import React from 'react';
import open from '../assets/images/open.jpg';

const Jumbo = () => {
    return (
        <div className="jumbotron">
            <h1 className="jumbotron__header">E-COMM, THE ECOMMERCE SUPERSTORE</h1>
            <img className='jumbotron__background' src={open} alt='jumbotron'/>
            <button className='jumbotron__btn'>Products</button>
        </div>
    )
}

export default Jumbo;