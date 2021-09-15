import React from 'react';
import open from '../assets/images/open.jpg';
import { useHistory } from 'react-router';

const Jumbo = () => {
    const history = useHistory();
    const redirect = () => {
        history.push('/products');
    }
    return (
        <div className="jumbotron">
            <h1 className="jumbotron__header">E-COMM, THE ECOMMERCE SUPERSTORE</h1>
            <img className='jumbotron__background' src={open} alt='jumbotron'/>
            <button onClick={redirect} className='jumbotron__btn'>Products</button>
        </div>
    )
}

export default Jumbo;