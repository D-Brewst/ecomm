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

    const word = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div>
            <h2 className="category__header">Filter By Category:</h2>
            <div className="category__btndiv">
                {categories.map((item) => (
                    <button
                    className="category__button"
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                    >
                    {word(item.name)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Categories;