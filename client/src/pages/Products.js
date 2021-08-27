import React, { useEffect } from 'react';
import Product from '../components/Product';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';

const Products = () => {
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

    return (
        <div>
            <h2 className="product__featured">Products</h2>
            {state.products.length ? (
                <div className="product__list">
                    {state.products.map((product) => (
                        <Product
                        key={product._id}
                        _id={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        inventory={product.inventory}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
        </div>
    )
}

export default Products;