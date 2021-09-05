import React from 'react';
import Shoppingcart from './Shoppingcart';
import { useStoreContext } from '../utils/GlobalState';
import {LOGOUT} from '../utils/actions';
import {useHistory} from 'react-router-dom';
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

    return (
        <nav className='navigation'>
            <div className='navigation__logo' onClick={() => history.push('/')}><img id='logoimg' src={ecommlogo} alt='logo'/></div>
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
                {user.token && <li className='navigation__item'>
                    <button onClick={logOut}>Log Out</button>
                </li>}
                
            </ul>
            <Shoppingcart/>     
        </nav>
    )
}

export default NavBar;