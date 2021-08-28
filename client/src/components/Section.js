import React, {useEffect} from 'react';
import API from '../utils/API';
import electronics from '../assets/images/electronics.jpg';
import toys from '../assets/images/toys.jpg';
import clothes from '../assets/images/clothes.jpg';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';
import { useHistory } from "react-router-dom";

const Section = () => {
    const [state, dispatch] = useStoreContext();

    const history = useHistory();

    const {categories, currentCategory} = state;

    useEffect(() => {
        API.getCategories().then((res) => {
            console.log(res);
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: res.categories,
              });
        });
        console.log(currentCategory)
    }, [dispatch, currentCategory])

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
        history.push("/products");
    }

    return (
        <div className='row section'>
            <h1 className='section__heading'>Categories</h1>
            <div className='row section__row'>
                <div className='col-1-of-3 section__container' onClick={() => handleClick(categories[0]._id)}>
                    <img className='section__img' src={electronics} alt='electronics'/>
                    <h2 className='section__sub'>Electronics</h2>
                </div>
                <div className='col-1-of-3 section__container' onClick={() => handleClick(categories[2]._id)}>
                    <img className='section__img' src={toys} alt='toys'/>
                    <h2 className='section__sub'>Toys</h2>
                </div>
                <div className='col-1-of-3 section__container' onClick={() => handleClick(categories[1]._id)}>
                    <img className='section__img' src={clothes} alt='clothing'/>
                    <h2 className='section__sub'>Clothes</h2>
                </div>
            </div>
        </div>
    )
}

export default Section;