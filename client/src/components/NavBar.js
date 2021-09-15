import React from 'react';
import Shoppingcart from './Shoppingcart';
import { useStoreContext } from '../utils/GlobalState';
import {LOGOUT} from '../utils/actions';
import {useHistory, Link} from 'react-router-dom';
import ecommlogo from '../assets/images/ecommlogo.png';

const NavBar = () => {
    const [state, dispatch] = useStoreContext();

    const {user} = state;

    const history = useHistory();

    function logOut() {
        localStorage.removeItem("authuser");
        dispatch({
          type: LOGOUT,
        });
        history.push('/logout');
    }

    const toggleLinks =  () => {
        const links = document.getElementsByClassName("navigation__list")[0];
        links.classList.toggle("active");
    }

    return (
        <nav className='navigation'>
            <div className='navigation__logo' onClick={() => history.push('/')}><img id='logoimg' src={ecommlogo} alt='logo'/></div>
            <div onClick={toggleLinks} className="navigation__toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <Link to='/products'>Products</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/login'>Log In</Link>
                </li>
                {user.token && <li className='navigation__item'>
                    <Link to="/" onClick={logOut}>Log Out</Link>
                </li>}   
            </ul>
            <Shoppingcart/>     
        </nav>
    )
}

export default NavBar;