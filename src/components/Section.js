import React from 'react';
import electronics from '../assets/images/electronics.jpg';
import toys from '../assets/images/toys.jpg';
import clothes from '../assets/images/clothes.jpg';

const Section = () => {
    return (
        <div className='row section'>
            <h1 className='section__heading'>Categories</h1>
            <div className='row section__row'>
                <div className='col-1-of-3 section__container'>
                    <img className='section__img' src={electronics} alt='electronics'/>
                    <h2 className='section__sub'>Electronics</h2>
                </div>
                <div className='col-1-of-3 section__container'>
                    <img className='section__img' src={toys} alt='toys'/>
                    <h2 className='section__sub'>Toys</h2>
                </div>
                <div className='col-1-of-3 section__container'>
                    <img className='section__img' src={clothes} alt='clothing'/>
                    <h2 className='section__sub'>Clothes</h2>
                </div>
            </div>
        </div>
    )
}

export default Section;