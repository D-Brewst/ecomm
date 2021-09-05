import React, {useEffect} from 'react';
import { useStoreContext } from '../utils/GlobalState';
import {CLEAR_CART} from '../utils/actions';

const Success = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        dispatch({
            type: CLEAR_CART
        })
    }, [dispatch])

    return (
        <div>
            <h4>Thank you for your purchase, we are processing your payment. Look out for an email regarding shipping details.</h4>
        </div>
    )
}

export default Success;
