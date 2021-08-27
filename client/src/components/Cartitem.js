import React from 'react';
import negative from '../assets/icons/negative.svg';
import plus from '../assets/icons/plus.svg';

const CartItem = (props) => {
    const {name, price, image, _id, description, quantity, inventory} = props

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
                <img className='cart-item__icon' src={plus} alt="plus"/>
                <img className='cart-item__icon' src={negative} alt="minus"/>
                
            </div>
            <div className='col-1-of-4'>
                <h5>Price</h5>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CartItem;