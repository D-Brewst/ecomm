import React from 'react';
import Shoppingcart from './Shoppingcart';

const NavBar = () => {

    return (
        <nav className='navigation'>
            <div className='navigation__logo'><a href='/'>E-COMM</a></div>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <a href='/products'>Products</a>
                </li>
                <li className='navigation__item'>
                    <a href='/signup'>Sign Up</a>
                </li>
                <li className='navigation__item'>
                    <a href='/login'>Log In</a>
                </li>
            </ul>
            <Shoppingcart/>     
        </nav>
    )
}

export default NavBar;