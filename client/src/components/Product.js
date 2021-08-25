import React from 'react';

const Product = (props) => {
    const {name, price, image, description} = props;
    return (
        <div className='col-1-of-4 product'>
            <div className='product__container'>
                <img className='product__image' src={image} alt="product"/>
            </div>
            <h2 className='product__name'>{name}</h2>
            <div>
                <p className='product__price'>${price}</p>
            </div>
            <div className='product__description'>
                <p>{description}</p>
            </div>
            <div className='product__btndiv'>
                <button className='product__btn'>Add to cart</button>
            </div>
            
        </div>
    )
}

export default Product;