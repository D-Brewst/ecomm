import React from 'react';
import Cart from '../assets/images/cart.png'

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
            <div className='navigation__cartcontainer'>
                <img className='navigation__cart' src={Cart} alt='cart'/>
                <span className='navigation__cartnumber'>5</span>
            </div>    
        </nav>
    )
}

export default NavBar;