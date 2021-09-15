import React, {useEffect} from 'react';
import Cart from '../assets/images/cart.png';
import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART } from '../utils/actions';
import close from "../assets/images/close.png";
import CartItem from "./Cartitem";
import { useHistory } from "react-router-dom";

const Shoppingcart = () => {
    const [state, dispatch] = useStoreContext();

    const history = useHistory();

    const {cart} = state;

    useEffect(() => {
        var back = document.getElementById('main');

        function closeCart() {
            if(state.cartOpen === true){
                dispatch({ 
                    type: TOGGLE_CART,
                    cartOpen: false
                 });
                back.style.filter = "blur(0px)";
            }
            return;
        }
        back.addEventListener('click', closeCart);
    }, [dispatch, state.cartOpen])

    var back = document.getElementById('main');

    // back.addEventListener('click', closeCart);

    const saveCart = () => {
        const goods = cart.length > 0 ? cart : [];
        localStorage.setItem('cart', JSON.stringify(goods));
    }

    const beginCheckout = () => {
        closeCart();
        history.push("/checkout");
    }

    function closeCart() {
        if(state.cartOpen === true){
            dispatch({ 
                type: TOGGLE_CART,
                cartOpen: false
             });
            var back = document.getElementById('main');

            back.style.filter = "blur(0px)";
            saveCart();
        }
        return;
    }

    // const closeCart = useCallback(() => {
    //     if(state.cartOpen === true){
    //         dispatch({ type: TOGGLE_CART });
    //         back.style.filter = "blur(0px)";
    //         saveCart();
    //     }
    //     return;
    //   }, [dispatch, back.style, saveCart, state.cartOpen])

    function toggleCart() {
        var back = document.getElementById('main');

        dispatch({ 
            type: TOGGLE_CART,
            cartOpen: true
         });
        back.style.filter = "blur(20px)";
    }
    
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
          sum += item.price * item.quantity;
        });
        return sum.toFixed(2);
      } 

    if (state.cartOpen === false) {
        return (
        <div className='navigation__cartcontainer' onClick={toggleCart}>
            <img className='navigation__cart' src={Cart} alt='cart'/>
            <span className='navigation__cartnumber'>{state.cart.length}</span>
        </div> 
        );
      }
    
      return (
        <div className="cart">
            <div onClick={closeCart}>
                <img className="cart__close" src={close} alt='close cart modal'/>
            </div>
            <h2>Shopping Cart</h2>
            {state.cart.length ? (
                <div>
                    {state.cart.map((product) => (
                        <CartItem 
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                            inventory={product.inventory}
                        />
                    ))}
            
                    <div>
                        <p><strong>Total: ${calculateTotal()}</strong></p>
                        <button onClick={beginCheckout} className="cart__btn">Begin Checkout</button>
                    </div>
                </div>
            ) : (
            <div>
                <h3>
                Your cart is empty.
                </h3>
            </div>
            )}
        </div>
      );
}

export default Shoppingcart;