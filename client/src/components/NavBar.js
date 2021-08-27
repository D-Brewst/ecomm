import React, {useEffect} from 'react';
import Cart from '../assets/images/cart.png';
import { useStoreContext } from '../utils/GlobalState';

const NavBar = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log(state.cart.length)
    })

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
                <span className='navigation__cartnumber'>{state.cart.length}</span>
            </div>    
        </nav>
    )
}

export default NavBar;