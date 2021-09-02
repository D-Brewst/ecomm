import React, {useState} from 'react';
// import GuestCheckout from '../components/GuestCheckout';
import Shipping from '../components/Shipping';
import CustomCheckout from '../components/CustomCheckout';
import { useStoreContext } from '../utils/GlobalState';


const Checkout = () => {
    const [state, dispatch] = useStoreContext();
    const {cart} = state;

    const [shipping, setShipping] = useState(null);
    const addressShown = {
        display: (shipping ? 'none' : 'block')
      }
    const cardShown = {
        display: (shipping ? 'block' : 'none')
    }
    return (
        <div className="checkout">
            <div style={addressShown} >
                {/* <GuestCheckout/> */}
                <Shipping setShipping={setShipping} />
            </div>
            <div style={cardShown}>
                <CustomCheckout shipping={shipping} cart={cart} />
            </div>
        </div>
    )
}

export default Checkout;