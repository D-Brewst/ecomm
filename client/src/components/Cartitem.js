import React from 'react';
import negative from '../assets/icons/negative.svg';
import plus from '../assets/icons/plus.svg';
import trash from '../assets/icons/trash-bin.svg';
import { useStoreContext } from '../utils/GlobalState';
import {UPDATE_CART_QUANTITY, REMOVE_FROM_CART} from '../utils/actions';

const CartItem = (props) => {
    const [state, dispatch] = useStoreContext();

    const {cart} = state;

    const {name, price, image, _id, description, quantity, inventory} = props;
    const product = {name, price, image, _id, description, quantity, inventory};

    const saveCart = (cart) => {
        const goods = cart.length > 0 ? cart : [];
        localStorage.setItem('cart', JSON.stringify(goods));
    }

    const increaseQuantity = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === product._id);
        console.log(itemInCart);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: product._id,
                product: { ...itemInCart, quantity: itemInCart.quantity + 1 }
            });
        }
        saveCart(product);
    };
    
    const decreaseQuantity = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === product._id);
        console.log(itemInCart);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: product._id,
                product: { ...itemInCart, quantity: itemInCart.quantity - 1 }
            });
        }
        saveCart(product)
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: product._id
        });
        saveCart(cart)
    }
    

    return (
        <div className='cart-item row'>
            <div className='col-1-of-4 cart-item__imgcontainer'>
                <img className='cart-item__img' src={image} alt='cart item'/>
            </div>
            <div className='col-1-of-4'>
                <h5>Item</h5>
                <p>{name}</p>
            </div>
            <div className='col-1-of-4'>
                <h5>Quantity</h5>
                <p>{quantity}</p>
                <img onClick={increaseQuantity} className='cart-item__icon' src={plus} alt="plus"/>
                {quantity > 1 ? <img onClick={decreaseQuantity} className='cart-item__icon' src={negative} alt="minus"/> :
                <img onClick={removeFromCart} className='cart-item__icon' src={trash} alt="remove"/>}
                
            </div>
            <div className='col-1-of-4'>
                <h5>Price</h5>
                <p>${price * quantity}</p>
            </div>
        </div>
    )
}

export default CartItem;