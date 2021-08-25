import React, { useEffect } from 'react';
import Product from "./Product";
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import API from "../utils/API";

const Featured = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getFeatured().then((res) => {
            console.log(res.products);
            dispatch({
                type: UPDATE_PRODUCTS,
                products: res.products,
              });
        });
    }, [dispatch])

    const featuredArr = state.products.slice(0, 4);

    return (
        <div>
            <h2 className="product__featured">Featured Collection</h2>
            {featuredArr.length ? (
                <div className="row">
                    {featuredArr.map((product) => (
                        <Product
                        key={product._id}
                        _id={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price.$numberDecimal}
                        quantity={product.quantity}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
        </div>
    )
}

export default Featured;

