import React from 'react';
import { Link } from "react-router-dom";
import {inCart} from "../utils/helpers";
import {useStoreContext} from "../utils/GlobalState";
import {
    UPDATE_CART_QUANTITY,
    ADD_TO_CART
  } from '../utils/actions';

const Product = (props) => {
    const [state, dispatch] = useStoreContext();
    const {cart} = state;
    const {name, price, image, _id, description, quantity, inventory} = props;
    const product = {name, price, image, _id, description, quantity, inventory};

    const saveCart = (cart) => {
        const goods = cart.length > 0 ? cart : [];
        localStorage.setItem('cart', JSON.stringify(goods));
    }

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === product._id);
        console.log(itemInCart);
        if (itemInCart) {
          dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: product._id,
            product: { ...itemInCart, quantity: itemInCart.quantity + 1 }
        });
          saveCart(cart);
        } else {
          dispatch({
            type: ADD_TO_CART,
            product: { ...product, quantity: 1 },
          });
          saveCart(cart);
        }
      };

    return (
        <div className='col-1-of-4 product'>
            <Link to={`/products/${_id}`}>
            <div className='product__container'>
                <img className='product__image' src={image} alt="product"/>
            </div>
            <h2 className='product__name'>{name}</h2>
            <div>
                <p className='product__price'>${price}</p>
            </div>
            </Link>
            {!inCart(cart, product) ? 
            <div className='product__btndiv'>
                <button className='product__btn' onClick={addToCart}>Add to cart</button>
            </div> : 
            <div className='product__btndiv'>
                <button className='product__btn' onClick={addToCart}>Add More</button>
            </div>}
        </div>
    )
}

export default Product;