import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../utils/API';
import {inCart} from '../utils/helpers';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS
} from '../utils/actions';


function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    else{
        API.getFeatured().then((res) => {
            console.log(res.products);
            dispatch({
                type: UPDATE_PRODUCTS,
                products: res.products,
              });
        });
    }
    const goods = cart.length > 0 ? cart : [];
    localStorage.setItem('cart', JSON.stringify(goods));
  }, [products, dispatch, id, cart]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        product: { ...itemInCart, quantity: itemInCart.quantity + 1 }
      });
      console.log(cart);
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, quantity: 1 },
      });
      console.log(cart);
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });
  };

  const cartIndex = cart.findIndex(item => item._id === id);
  console.log(cartIndex);

  return (
    <>
      {currentProduct && cart ? (
        <div className='row detail'>
            <div className="col-2-of-3 detail__productimg">
                <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className=" detail__img"
                />
            </div>

            <div className="col-1-of-3 detail__section">
                <Link to="/products">← Back to Products</Link>
                <h2 className="detail__name">{currentProduct.name}</h2>

                <p className='detail__price'><strong>Price:</strong>${currentProduct.price}</p>

                <p className="detail__description">Description: {currentProduct.description}</p>

                
                {!inCart(cart, currentProduct) ? 
                <button className="detail__btn" onClick={addToCart}>Add to cart</button> : 
                <button className="detail__btn" onClick={addToCart}>Add More</button>}
                <button className="detail__btn" disabled={!cart.find((p) => p._id === currentProduct._id)} onClick={removeFromCart}>
                    Remove from Cart
                </button>
                <button className="detail__btn">Continue to Checkout</button>
                {cart[cartIndex] ? <p>You have {cart[cartIndex].quantity} of this item in your cart</p> :
                <p>You have 0 of this item in your cart</p>}     
            </div>
          
        </div>
      ) : null}
    </>
  );
}

export default Detail;
