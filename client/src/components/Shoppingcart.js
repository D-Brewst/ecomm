import React, {useEffect} from 'react';
import Cart from '../assets/images/cart.png';
import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART } from '../utils/actions';
import close from "../assets/images/close.png";
import CartItem from "./Cartitem";

const Shoppingcart = () => {
    const [state, dispatch] = useStoreContext();

    const {cart} = state;

    useEffect(() => {
        var back = document.getElementById('main');
        function toggleCart() {
            dispatch({ type: TOGGLE_CART });
            back.style.filter = "blur(20px)";
          }

        function closeCart() {
            if(state.cartOpen === true){
                toggleCart();
                back.style.filter = "blur(0px)";
            }
            return;
        }
        back.addEventListener('click', closeCart);
    }, [dispatch, state.cartOpen])

    var back = document.getElementById('main');

    const saveCart = (cart) => {
        const goods = cart.length > 0 ? cart : [];
        localStorage.setItem('cart', JSON.stringify(goods));
    }

    function closeCart() {
        if(state.cartOpen === true){
            toggleCart();
            back.style.filter = "blur(0px)";
            saveCart(cart);
        }
        return;
    }

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
        back.style.filter = "blur(20px)";
    }
    
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
          sum += item.price * item.quantity;
        });
        return sum.toFixed(2);
      } 

    if (!state.cartOpen) {
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
                        <button className="cart__btn">Begin Checkout</button>
                    </div>
                </div>
            ) : (
            <div>
                <h3>
                <span role="img" aria-label="shocked">
                    😱
                </span>
                You haven't added anything to your cart yet!
                </h3>
            </div>
            )}
        </div>
      );
}

export default Shoppingcart;