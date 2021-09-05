import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';

const CustomCheckout = ({cart, shipping}) => {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    // const [paymentId, setPaymentId] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    useEffect(() => {
        console.log(shipping);
        console.log(cart);
        const products = cart.map(product => ({price: product.price, quantity: product.quantity}));
        console.log(products);
        if (shipping) {
            const body = {
              cart: products,
              shipping: {
                name: shipping.name,
                address: {
                  line1: shipping.address
                }
              },
              description: 'payment intent for ecomm',
              receipt_email: shipping.email,
            }
            
            console.log(body);

            const createIntent = async () => {
                const { data } = await axios.post("/payment", body);
                console.log(data);
                setClientSecret(data.clientSecret);
                // setPaymentId(data.id);
            }
            
            createIntent();

        }

    }, [shipping, cart])

    const handleSubmit = async () => {
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        })

        if(payload.error){
            setError(`Payment Failed: ${payload.error.message}`)
        } else{
            history.push('/success');
        }
    }

    const cardHandleChange = event => {
        const { error } = event;
        setError(error ? error.message: '');
    }

    return (
        <div className="custom">
            <from className="custom__form">
                <h2 className="custom__header">Payment Details</h2>
                <div className="custom__input">
                    <CardNumberElement 
                    className="custom__text"
                    onChange={cardHandleChange}
                    />
                </div>
                <div className="custom__input">
                    <CardExpiryElement 
                    className="custom__text"
                    onChange={cardHandleChange}
                    />
                </div>
                <div className="custom__input">
                    <CardCvcElement 
                    className="custom__text"
                    onChange={cardHandleChange}
                    />
                </div>
                <button
                    disabled={processing}
                    className="custom__btn"
                    onClick={() => handleSubmit()}
                >
                    { processing ? 'Processing' : 'Submit' }
                </button>
                {
                    error && (<p className='error-message'>{error}</p>)
                }
            </from>
        </div>
    )
}

export default CustomCheckout;