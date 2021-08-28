import React, {useEffect} from 'react';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';

const Categories = () => {
    const [state, dispatch] = useStoreContext();

    const {categories} = state;

    useEffect(() => {
        API.getCategories().then((res) => {
            console.log(res);
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: res.categories,
              });
        });
    }, [dispatch])

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
          });
    }

    return (
        <div>
            <h2>Choose a Category:</h2>
            {categories.map((item) => (
                <button
                key={item._id}
                onClick={() => {
                    handleClick(item._id);
                }}
                >
                {item.name}
                </button>
            ))}
        </div>
    )
}

export default Categories;