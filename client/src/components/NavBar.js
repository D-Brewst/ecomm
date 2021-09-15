import React, { useEffect } from 'react';
import Shoppingcart from './Shoppingcart';
import { useStoreContext } from '../utils/GlobalState';
import {LOGOUT} from '../utils/actions';
import {useHistory, Link} from 'react-router-dom';
import ecommlogo from '../assets/images/ecommlogo.png';

const NavBar = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        var back = document.getElementById('main');

        const closeLinks = () => {
            const links = document.getElementsByClassName("navigation__list")[0];
            links.classList.remove("active");
        }

        back.addEventListener('click', closeLinks);
    }, [])

    const {user} = state;

    const history = useHistory();

    function logOut() {
        localStorage.removeItem("authuser");
        dispatch({
          type: LOGOUT,
        });
        history.push('/logout');
        toggleLinks();
    }

    const toggleLinks =  () => {
        const links = document.getElementsByClassName("navigation__list")[0];
        links.classList.toggle("active");
    }

    const closeLinks = () => {
        const links = document.getElementsByClassName("navigation__list")[0];
        links.classList.remove("active");
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
                    <Link onClick={closeLinks} to='/products'>Products</Link>
                </li>
                <li className='navigation__item'>
                    <Link onClick={closeLinks} to='/signup'>Sign Up</Link>
                </li>
                <li className='navigation__item'>
                    <Link onClick={closeLinks} to='/login'>Log In</Link>
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