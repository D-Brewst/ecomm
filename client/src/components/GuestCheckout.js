import React, { useRef } from "react";
import {useStoreContext} from '../utils/GlobalState';
import { useStripe } from '@stripe/react-stripe-js';
import axios from "axios";

const GuestCheckout = () => {
    const [state, dispatch] = useStoreContext();
    const {cart} = state;
    const stripe = useStripe();
    const logemailRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const line_items = cart.map(item => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.price * 100, // amount is in cents
                    product_data: {
                        name: item.name,
                        description: item.description,
                        images: [item.image], 
                    }
                }
            }
        });

        const { data } = await axios.post("/checkout", {
            line_items,
            customer_email: logemailRef.current.value
        });

        const { sessionId } = data;
        const { error } = await stripe.redirectToCheckout({
          sessionId
        });
        
        if (error) {
          console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type='email'
                        placeholder='Email'
                        ref={logemailRef}
                        aria-disabled="false"
                        className='nomad-input'
                    />
                </div>
                <div className='submit-btn'>
                    <button type='submit' className='button is-black nomad-btn submit'>
                    Checkout
                    </button>
                </div>
            </form>
        </div>
    )
}

export default GuestCheckout;