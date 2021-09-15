import React, {useEffect} from 'react';
import { useStoreContext } from '../utils/GlobalState';
import {CLEAR_CART} from '../utils/actions';
import fireworks from "../assets/images/fireworks.png";

const Success = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        dispatch({
            type: CLEAR_CART
        })
    }, [dispatch])

    return (
        <div class="success">
            <h2 class="success__header">Your order was successsful!</h2>
            <img class="success__img" src={fireworks} alt="celebration"/>
            <h4 class="success__statement">Thank you for your purchase! Look out for an email with further details about your order.</h4>
        </div>
    )
}

export default Success;
